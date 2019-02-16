import { generateNoteOtherThan, createNoteGenerator } from './NoteGenerator'

test("Returns the right note for a given seed", () => {
    // let noteGen = createNoteGenerator(0.5, ['c'])
    let noteGen = createNoteGenerator({density: 0.5, range: ['c']})

    expect(noteGen(0.2)).toBe('c')
    expect(noteGen(0.9)).toBe('z')

    noteGen = createNoteGenerator({density: 0.8, range: ['a', 'b']})
    expect(noteGen(0.3)).toBe('a')
    expect(noteGen(0.6)).toBe('b')
})

test("Returns 'z' if randomizer keeps supplying 'c'", () => {
    const noteGenerator = () => 'c'
    const randomizer = () => 0.5
    expect(generateNoteOtherThan('c', randomizer, noteGenerator, 10)).toBe('z')
})

test("Returns 'b' if randomizer returns 'a', 'a', 'b'", () => {
    let count = 3
    const randomizer = () => 0.5
    const noteGenerator = () => --count ? 'a' : 'b'
    expect(generateNoteOtherThan('a', randomizer, noteGenerator, 10)).toBe('b')
})
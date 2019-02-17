const getByDecimalIndex = (arr, decimal) => arr[Math.floor(decimal * arr.length)]

const generateNote = density => range => rand =>
    rand > normalizeDensity(density)
        ? 'z'
        : getByDecimalIndex(range, (rand / density))

const normalizeDensity = density => density ** 2

export const generateNoteOtherThan = (note, randomizer, genNote, attempts) => {
    let newNote = genNote(randomizer())
    return attempts < 1
        ? 'z'
        : newNote !== note
            ? newNote
            : generateNoteOtherThan(newNote, randomizer, genNote, attempts - 1)
}

export const createNoteGenerator = ({density=0.5, range=['c']}={}) => generateNote(density)(range)
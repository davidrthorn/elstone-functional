import { generateSequence, exceedsMaxConsecutive } from './SequenceGenerator'

test('Returns a sequence containing no more than the specified maximum consecutive notes', () => {
    const randArray = Array(8)
        .fill(0)
        .map(Math.random)

    console.log(randArray)
    console.log(generateSequence(3)(randArray))

    expect(1).toBe(2)

    // const sg = new SequenceGenerator({length: 16, maxConsecutive: 3}, MockNoteGenerator, MockNoteOtherThan)
    // expect(sg.generate()).toBe('ccczccczccczcccz')
})

test('Returns true if sequence ends with 3 consecutive notes', () => {
    expect(exceedsMaxConsecutive('cccc', 3)).toBe(true)
    expect(exceedsMaxConsecutive('Dccc', 3)).toBe(true)
    expect(exceedsMaxConsecutive('Dccc', 3)).toBe(true)
})

test('Returns false if sequence does not end with 3 consecutive notes ', () => {
    expect(exceedsMaxConsecutive('', 3)).toBe(false)
    expect(exceedsMaxConsecutive('dc', 3)).toBe(false)
    expect(exceedsMaxConsecutive('ddcc', 3)).toBe(false)
    expect(exceedsMaxConsecutive('DcccD', 3)).toBe(false)
})
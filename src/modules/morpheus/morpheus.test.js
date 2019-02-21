import * as morpheus from './morpheus'

test("transpose", () => {
    const input = [
        ['a', 'b', 'c', 'd'],
        ['a', 'b', 'c'],
        ['a', 'b', 'c'],
        ['a', 'b', 'c'],
        ['a', 'b', 'c'],
    ]

    const want = [
        ['a', 'a', 'a', 'a', 'a'],
        ['b', 'b', 'b', 'b', 'b'],
        ['c', 'c', 'c', 'c', 'c'],
        ['d'],
    ]

    expect(morpheus.transpose(input)).toEqual(want)
})

test("sortByRowLength returns an array sorted the right way", () => {
    const input = [
        ['a', 'b', 'c'],
        ['a', 'b', 'c', 'd'],
        ['a', 'b'],
    ]

    const desc = [
        ['a', 'b', 'c', 'd'],
        ['a', 'b', 'c'],
        ['a', 'b'],
    ]

    const asc = [
        ['a', 'b'],
        ['a', 'b', 'c'],
        ['a', 'b', 'c', 'd'],
    ]

    expect(morpheus.sortByRowLength(input, true)).toEqual(desc)
    expect(morpheus.sortByRowLength(input, false)).toEqual(asc)
})

test("sortByRowLength handles empty arrays", () => {
    expect(morpheus.sortByRowLength([])).toEqual([])
})

test('should convert arrays to matrices', () => {
    expect(morpheus.strArrToMatrix(['abc', 'abc'])).toEqual([
        ['a', 'b', 'c'],
        ['a', 'b', 'c'],
    ])
})

test("should handle empty arrays", () => {
    expect(morpheus.strArrToMatrix([])).toEqual([])
})

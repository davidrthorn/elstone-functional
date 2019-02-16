const getByDecimalIndex = (arr, decimal) => arr[Math.floor(decimal * arr.length)]

export const generateNote = density => range => rand =>
    rand > density
        ? 'z'
        : getByDecimalIndex(range, (rand / density))

export const generateNoteOtherThan = (note, randomizer, genNote, attempts) => {
    let newNote = genNote(randomizer)
    return attempts < 1
        ? 'z'
        : newNote !== note
            ? newNote
            : generateNoteOtherThan(newNote, randomizer, genNote, attempts - 1)
}

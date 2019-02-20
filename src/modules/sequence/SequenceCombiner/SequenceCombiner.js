// Convert an array of sequences to a matrix
const toMatrix = sequences => sequences.map(s => s.split(''))

const sortByRowLengthDesc = matrix => matrix.sort((a, b) => b.length - a.length)

export const transpose = s =>
    s[0].map((note, i) =>
        s.map((row, j) => 
            row[i])
                .filter(a => a !== undefined))

export const removeDuplicates = sequence =>
    sequence.filter((note, i, arr) => !(arr.indexOf(note) > -1 && arr.indexOf(note) < i))

const removeRests = sequence =>
    sequence.filter((note, i, s) => !((note === 'z' || note === ' ') && s.length > 1))

const addBrackets = sequence =>
    sequence.length > 1
        ? ['['].concat(sequence, [']'])
        : sequence

const processCols = cols => cols.map(
    c => {
        let output = removeDuplicates(c)
        output = output.sort()
        output = removeRests(output)
        output = addBrackets(output)
        output = output.join('')

        return output
    }
)

export const combineSequences = sequences => {
    let output = toMatrix(sequences)
    output = sortByRowLengthDesc(output)
    output = transpose(output)
    output = processCols(output)
    output = output.join('')

    return output
}

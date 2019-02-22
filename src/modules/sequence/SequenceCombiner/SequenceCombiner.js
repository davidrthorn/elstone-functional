import * as morpheus from '../../morpheus/morpheus'

// Convert an array of sequences to a matrix
export const removeDuplicates = sequence => [...new Set(sequence)]

const removeRests = sequence =>
    sequence.filter((note, i, s) => !((note === 'z' || note === ' ') && s.length > 1))

const addBrackets = sequence =>
    sequence.length > 1
        ? ['['].concat(sequence, [']'])
        : sequence

const processCols = cols => cols.map(
    col => {
        let output = removeDuplicates(col)
        output = output.sort()
        output = removeRests(output)
        output = addBrackets(output)
        output = output.join('')

        return output
    }
)

export const combineSequences = sequences => {
    let output = morpheus.strArrToMatrix(sequences)
    output = morpheus.sortByRowLength(output)
    output = morpheus.transpose(output)
    output = processCols(output)
    output = output.join('')

    return output
}

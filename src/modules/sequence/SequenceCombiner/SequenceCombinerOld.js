export const combineNotes = column => {
    column = column.split('').sort().join('')

    const invalids = column.match(/[^a-gz]/gi)
    if (invalids) {
        const list = invalids
            .map(i => "'" + i + "'")
            .join(', ')
        throw new Error('Unsupported characters: ' + list)
    }

    if (column.search(/[a-g]+/gi) === -1) {
        return column.slice(-1)
    }

    column = removeRests(column)
    column = removeDuplicates(column)
    column = addBrackets(column)

    return column
}

export const toColStrings = sequences => colStrings(sequences.sort((a, b) => b.length - a.length))

export const combineSequences = sequences => sequences.reduce((total, column) => {
    return total + combineNotes(column)
}, '')

const toString = column => [column.reduce((total, note) => total + note, '')] 

const colStrings = (sequences, total=[]) => {
    const current = sequences.map(s => s.substr(0, 1))
    const remaining = sequences.map(s => s.substr(1)) 
    const newTotal = total.concat(toString(current))

    return !remaining[0].length
        ? newTotal
        : colStrings(remaining, newTotal)
}

const removeDuplicates = column => [...new Set(column.split(''))].join('')


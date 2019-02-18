// export const combineSeqeunces = sequences => {
//     let result = ''
//     const s = sequences.slice()
//     const columns = toColumns(s)

//     while (columns.length) {
//         result += combineNotes(
//             columns.shift()
//         )
//     }
//     return result
// }

// const combineNotes = column => {
//     column = column.split('').sort().join('')

//     const invalids = column.match(/[^a-gz]/gi)
//     if (invalids) {
//         const list = invalids
//             .map(i => "'" + i + "'")
//             .join(', ')
//         throw new Error('Unsupported characters: ' + list)
//     }

//     if (column.search(/[a-g]+/gi) === -1) {
//         return column.slice(-1)
//     }

//     column = removeRests(column)
//     column = removeDuplicates(column)
//     column = addBrackets(column)

//     return column
// }

export const toColumns = arr => {
    const result = [];
    const desc = arr.sort((a, b) => b.length - a.length);
    let i = desc.length;
    while (i--) {
        for (let j = 0; j < desc[i].length; j++) {
            let note = desc[i][j];
            result[j] = result[j]
                ? note + result[j]
                : note;
        }
    }
    return result
}

const toString = column => [column.reduce((total, note) => total + note, '')] 

const sortedToColStrings = sequences => {
    return sequences.length
        ? sequences[0].length <= 1
            ? toString(sequences)
            : toString(sequences.map(s => s.substr(0, 1)))
                .concat(sortedToColStrings(sequences.map(s => s.substr(1))))
        : []
}

export const toColStrings = sequence =>
    sortedToColStrings(
        sequence.sort(
            (a, b) => b.length - a.length
        )
    )



export const removeDuplicates = column => [...new Set(column.split(''))].join('')

const addBrackets = column => column.replace(/[a-g]{2,}/gi, '[$&]')

const removeRests = column => column.replace(/z/gi, '')

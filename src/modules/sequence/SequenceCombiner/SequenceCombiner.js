export default class SeqeuenceCombiner {
    combine = sequences => {
        let result = ''
        const s = sequences.slice()
        const columns = this._toColumns(s)

        while (columns.length) {
            result += this._combineNotes(
                columns.shift()
            )
        }
        return result
    }

    _combineNotes = column => {
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

        column = this._removeRests(column)
        column = this._removeDuplicates(column)
        column = this._addBrackets(column)

        return column
    }

    _toColumns = arr => {
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

    _removeDuplicates = column => {
        let result = ''
        for (let i = 0; i < column.length; i++) {
            if (!result.includes(column[i])) {
                result += column[i]
            }
        }
        return result
    }

    _addBrackets = column => column.replace(/[a-g]{2,}/gi, '[$&]') 

    _removeRests = column => column.replace(/z/gi, '')
}

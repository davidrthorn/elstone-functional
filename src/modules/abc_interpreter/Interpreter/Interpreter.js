export default class Interpreter {
    constructor (swung=false) {
        this.swung = swung
    }

    interpretSequence = (sequence, groupLength) => {
        sequence = this._sequenceToGroups(sequence, groupLength)
        sequence = this._applyFunctionToGroups(sequence, this._addNoteValuesToGroup)
        sequence = this._applyFunctionToGroups(sequence, this._addTripletBracketsToGroup)
        sequence = this._groupsToBars(sequence)
        return sequence
    }

    _sequenceToGroups = (sequence, groupLength) => {
        let result = ''
        const cols = this._groupToColumns(sequence)

        for (let i = 0; i < cols.length; i++) {
            if (i && i % groupLength === 0) {
                result += ' '
            }
            result += cols[i]
        }
        return result
    }

    _groupToColumns = sequence => sequence.match(/(\[[a-g]+\]|[a-gxz])/gi) || []

    _addNoteValuesToGroup = group => {
        const notes = this._groupToColumns(group)
        if (notes[1] === 'z') {
            if (notes[2] === 'z') {
                return notes[0] + '2'
            }
            return notes[0] + notes[2]
        }
        return group
    }

    _applyFunctionToGroups = (sequence, f) => {
        return sequence
            .split(' ')
            .map(group => f(group))
            .join(' ')
    }

    _addTripletBracketsToGroup = group => {
        const notes = this._groupToColumns(group)
        if (!notes || notes.length !== 3) {
            return group
        }
        
        const patterns = ['nnz', 'znn', 'znz', 'nnn']
        let groupPattern = ''
        notes.forEach(n => {
            groupPattern += n === 'z'
                ? 'z'
                : 'n'
        })

        return patterns.includes(groupPattern)
            ? '(3' + group
            : group
    }

    _groupsToBars = sequence => {
        const groups = sequence.split(' ')
        let newGroups = []
        const danglingGroups = groups.length % 4
        
        groups.forEach((group, i) => {
            let atBarBreak = i && i % 4 === 0
            if (atBarBreak) {
                newGroups.push('|')
            }
            newGroups.push(group)
        })

        if (danglingGroups) {
            const restValue = String(2 * (4 - danglingGroups))
            newGroups.push('z' + restValue)
        }

        return newGroups.join(' ')
    }
}
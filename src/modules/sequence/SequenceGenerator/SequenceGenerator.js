export default class SequenceGenerator {
    constructor ({length=16, maxConsecutive=3, noteGenerator}) {
        this.length = length
        this.maxConsecutive = maxConsecutive
        this.noteGenerator = noteGenerator
    }

    generate = lastNote => {
        lastNote = lastNote || 'z'
        let consecutive = 1
        let result = ''
        let remaining = this.length

        while (remaining--) {
            let note = this.noteGenerator.generate()

            if (note === lastNote) {
                ++consecutive
            }

            if (consecutive > this.maxConsecutive) {
                note = this.noteGenerator.noteOtherThan(lastNote)
                consecutive = 1
            }

            result += note
            lastNote = note
        }
        return result
    }


}
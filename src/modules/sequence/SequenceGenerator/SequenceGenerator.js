import { createNoteGenerator } from "../NoteGenerator/NoteGenerator";

export default class SequenceGenerator {
    constructor ({length=16, maxConsecutive=3}) {
        this.length = length
        this.maxConsecutive = maxConsecutive
        this.generateNote = createNoteGenerator(1, ['c'])
    }

    generate = lastNote => {
        lastNote = lastNote || 'z'
        // let consecutive = 1
        let result = ''
        let remaining = this.length

        while (remaining--) {
            let note = this.generateNote(Math.random())

            // if (note === lastNote) {
            //     ++consecutive
            // }

            // if (consecutive > this.maxConsecutive) {
            //     note = generateNoteOtherThan(lastNote, Math.random, this.generateNote, 10)
            //     consecutive = 1
            // }

            result += note
            lastNote = note
        }
        return result
    }


}
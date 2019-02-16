import SequenceGenerator from './SequenceGenerator'

test('Returns a sequence containing no more than the specified maximum consecutive notes', () => {
    const MockNoteGenerator = {
        generate: () => 'c',
        noteOtherThan: () => 'z',
    }

    const sg = new SequenceGenerator({length: 16, noteGenerator: MockNoteGenerator})
    expect(sg.generate()).toBe('ccczccczccczcccz')
})
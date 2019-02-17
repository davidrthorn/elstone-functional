import { testGen } from './SequenceGenerator'

test('Returns a sequence containing no more than the specified maximum consecutive notes', () => {
    // const MockNoteGenerator = () => 'c'
    // const MockNoteOtherThan = () => 'z'

    const randArray = [...Array(16)].map(Math.random)

    console.log(testGen(2)(randArray))

    // const sg = new SequenceGenerator({length: 16, maxConsecutive: 3}, MockNoteGenerator, MockNoteOtherThan)
    // expect(sg.generate()).toBe('ccczccczccczcccz')
})
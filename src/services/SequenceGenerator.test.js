/* global test, expect */

import generateNote from './NoteGenerator'
import generateSequence from './SequenceGenerator'

test('Returns a sequence containing no more than the specified maximum consecutive notes', () => {
  const random = Array(8).fill(0.4)
  const noteGen = generateNote(1, ['c', 'D'])

  console.log(generateSequence)
  expect(generateSequence(noteGen)(3)(random)).toBe('cccDcccD')
})

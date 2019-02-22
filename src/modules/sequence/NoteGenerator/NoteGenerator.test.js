/* global test, expect */

import { generateNoteOtherThan, generateNote } from './NoteGenerator'

test('Returns the right note for a given seed', () => {
  let noteGen = generateNote(0.5)(['c'])

  expect(noteGen(0.2)).toBe('c')
  expect(noteGen(0.9)).toBe('z')

  noteGen = generateNote(0.8)(['a', 'b'])
  expect(noteGen(0.3)).toBe('a')
  expect(noteGen(0.6)).toBe('b')
})

test('Returns "z" if randomizer keeps supplying "c"', () => {
  const noteGenerator = () => 'c'
  expect(generateNoteOtherThan('c', noteGenerator, 0.5, 10)).toBe('z')
})

test('Returns "b" if randomizer returns "a", "a", "b"', () => {
  let count = 3
  const generateNote = () => --count ? 'a' : 'b'
  expect(generateNoteOtherThan('a', generateNote, 0.5, 10)).toBe('b')
})

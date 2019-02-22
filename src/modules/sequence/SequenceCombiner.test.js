/* global test, expect */

import { removeDuplicates, combineSequences } from './SequenceCombiner'

test('should remove repeated notes', () => {
  expect(removeDuplicates(['a', 'a', 'b', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c', 'd'])
  expect(removeDuplicates(['a', '', '', ' ', ' ', 'd'])).toEqual(['a', '', ' ', 'd'])
  expect(removeDuplicates([])).toEqual([])
})

test('should add brackets where appropriate', () => {
  expect(combineSequences(['abcz', 'dzdz', 'zzzz', 'ccc'])).toEqual('[acd][bc][cd]z')
  expect(combineSequences(['azzz', 'zbzz', 'zzcz', 'zzzd'])).toEqual('abcd')
})

test('should combine sequences', () => {
  expect(combineSequences(['abzz', 'zzdz'])).toEqual('abdz')
})

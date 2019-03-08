/* global test, expect */

import combineSequences from './SequenceCombiner'

test('should add brackets where appropriate', () => {
  expect(combineSequences(['abcz', 'dzdz', 'zzzz', 'ccc'])).toEqual('[adc][bc][cd]z')
  expect(combineSequences(['azzz', 'zbzz', 'zzcz', 'zzzd'])).toEqual('abcd')
})

test('should combine sequences', () => {
  expect(combineSequences(['abzz', 'zzdz'])).toEqual('abdz')
})

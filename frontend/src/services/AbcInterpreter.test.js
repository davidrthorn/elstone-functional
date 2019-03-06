/* global test, expect */

import interpret from './AbcInterpreter'

test('should add triplet brackets where appropriate', () => {
  expect(interpret(3, 'ccczcczczccz')).toBe('(3ccc (3zcc (3zcz (3ccz')
  expect(interpret(3, 'ccc')).toBe('(3ccc')
  expect(interpret(3, '[abc][abc][abc]')).toBe('(3[abc][abc][abc]')
  expect(interpret(3, '[abc]c[abc]')).toBe('(3[abc]c[abc]')
})

test('should convert to eigth notes where appropriate', () => {
  expect(interpret(3, 'czcczzzzzAzczzA')).toBe('cc c2 z2 Ac | zA')
  expect(interpret(3, '[abc]z[ABC][abc]zzzzz[abc]z[ABC]')).toBe('[abc][ABC] [abc]2 z2 [abc][ABC]')
})

/* global test, expect */

import { interpret } from './Interpreter'

test('should add triplet brackets where appropriate', () => {
  expect(interpret(3, 12, 'ccczcczczccz')).toBe('(3ccc (3zcc (3zcz (3ccz')
})

test('should convert to eigth notes where appropriate', () => {
  expect(interpret(3, 12, 'czcczzzzzAzc')).toBe('cc c2 z2 Ac')
  expect(interpret(3, 12, '[abc]z[ABC][abc]zzzzz[abc]z[ABC]')).toBe('[abc][ABC] [abc]2 z2 [abc][ABC]')
})

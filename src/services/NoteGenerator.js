import * as R from 'ramda'

export const generateNote = R.curry((density, range, random) =>
  random > density
    ? 'z'
    : getByDecimalIndex(range, (random / density))
)

export const generateNoteOtherThan = (note, genNote, random, attempts = 10) => {
  if (!attempts) return 'z'
  const newRandom = (random * 10) % 1
  return genNote(newRandom) !== note
    ? genNote(newRandom)
    : generateNoteOtherThan(note, genNote, newRandom, attempts - 1)
}

const getByDecimalIndex = (arr, decimal) => arr[Math.floor(decimal * arr.length)]

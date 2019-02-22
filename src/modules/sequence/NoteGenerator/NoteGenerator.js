export const generateNote = density => range => random =>
  random > normalizeDensity(density)
    ? 'z'
    : getByDecimalIndex(range, (random / density))

export const generateNoteOtherThan = (note, genNote, random, attempts = 10) => {
  if (attempts < 1) return 'z'
  let newNote = genNote(modulate(random))
  return newNote !== note
    ? newNote
    : generateNoteOtherThan(note, genNote, random + 2, attempts - 1)
}

const modulate = random => random ** 2 % 1

const getByDecimalIndex = (arr, decimal) => arr[Math.floor(decimal * arr.length)]

const normalizeDensity = density => density ** 2

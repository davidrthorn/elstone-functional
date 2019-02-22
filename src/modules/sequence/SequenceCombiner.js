import * as R from 'ramda'

const removeRests = col => {
  return R.equals(col, ['z'])
    ? col
    : R.without('z', col)
}

const strArrToMatrix = (arr, sep = '') => arr.map(row => row.split(sep))

const addBrackets = col =>
  col.length > 1
    ? R.reduce(R.concat, [], [['['], col, [']']])
    : col

const processCol = R.pipe(
  R.uniq,
  removeRests,
  addBrackets,
  R.join('')
)

const processCols = cols => cols.map(processCol)

const combineSequences = R.pipe(
  strArrToMatrix,
  R.transpose,
  processCols,
  R.join('')
)

export default combineSequences

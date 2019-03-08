import * as R from 'ramda'

const removeRests = col => R.equals(col, ['z']) ? col : R.without('z', col)

const addBrackets = col => R.length(col) === 1 ? col : R.unnest(['['], col, [']'])

const combineSequences = R.pipe(
  R.map(
    R.split('')
  ),
  R.transpose,
  R.map(
    R.pipe(
      R.uniq,
      removeRests,
      addBrackets,
      R.join('')
    )
  ),
  R.join('')
)

export default combineSequences

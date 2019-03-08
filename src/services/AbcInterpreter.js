import * as R from 'ramda'

const toGroups = R.curry((groupLength, sequence) => sequence.match(new RegExp(`((?:\\[\\w+\\])|(?:\\w)){${groupLength}}`, 'gi')) || '')

const len = group => group.match(/(\[\w+\]|\w)/gi).length

const addTripletEigths = group =>
  len(group) === 3
    ? group.replace(/([a-g]|\])z(\[|[a-g])/i, '$1$2')
    : group

const addTripletBrackets = group =>
  group.replace(/([a-g]|\[[a-g]+\])/gi, 'n').match(/^(nnn|nnz|znn|znz)$/i)
    ? '(3' + group
    : group

const addNoteValues = group =>
  len(group) === 3
    ? group.replace(/zz$/i, '2').replace(/^zz/i, 'z')
    : group

const addBarSeparators = sequence => {
  let groups = sequence.match(new RegExp(`[^ ]+( |$)`, 'gi'))
  return groups
    ? groups
      .reduce((total, current, i) => total + (i % 4 ? '' : '| ') + current)
    : sequence
}

const interpret = R.curry((groupLength, sequence) =>
  R.pipe(
    toGroups(groupLength),
    R.map(
      R.pipe(
        addTripletBrackets,
        addTripletEigths,
        addNoteValues)
    ),
    R.join(' '),
    addBarSeparators
  )(sequence)
)

export default interpret

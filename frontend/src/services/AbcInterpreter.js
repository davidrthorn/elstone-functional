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

const addBarSeparators = R.curry((perBar, sequence) => {
  let bars = sequence.match(new RegExp(`((?:[^ ]+ ){${perBar}})`))
  return bars
    ? bars
      .reduce((total, current) => total + '| ' + current)
      .trim()
    : sequence
})

const interpret = R.curry((groupLength, groupsPerBar, sequence) =>
  R.pipe(
    toGroups(groupLength),
    R.map(
      R.pipe(
        addTripletBrackets,
        addTripletEigths,
        addNoteValues)
    ),
    R.join(' '),
    addBarSeparators(groupsPerBar)
  )(sequence)
)

export default interpret

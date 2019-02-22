import R from 'ramda'

const toGroups = R.curry((groupLength, sequence) => sequence.match(new RegExp(`((?:\\[\\w+\\])|(?:\\w)){${groupLength}}`, 'gi')) || '')

const addTripletEigths = group =>
  len(group) === 3
    ? group.replace(/([a-g]|\])z(\[|[a-g])/i, '$1$2')
    : group

const addTripletBrackets = group => group.replace(/^(\w(?:[a-g]z|[a-g]{2}))$/i, '(3$&')

const addNoteValues = group => group.replace(/^(.+)zz$/i, '$12')

const processGroup = R.pipe(
  addTripletBrackets,
  addTripletEigths,
  addNoteValues
)

const processGroups = groups => groups.map(group => processGroup(group))

const addBarSeparators = R.curry((perBar, sequence) => {
  let matches = sequence.match(new RegExp(`((?:[^ ]+ ){${perBar}})`))
  return matches
    ? matches
      .reduce((total, current) => total + '| ' + current)
      .trim()
    : sequence
})

const len = group => group.match(/(\[\w+\]|\w)/gi).length

export const interpret = (groupLength, groupsPerBar, sequence) => {
  let groups = toGroups(groupLength, sequence)
  groups = processGroups(groups)
  groups = groups.join(' ')
  return addBarSeparators(groupsPerBar, groups)
}

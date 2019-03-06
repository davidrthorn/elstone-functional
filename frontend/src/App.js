import React, { useState } from 'react'
import './App.css'
import Phrase from './components/Phrase/index'
import generateNote, { randoms } from './services/NoteGenerator'
import generateSequence from './services/SequenceGenerator'

const App = () => {
  const [sequence, regenerateSequence] = useState(regenerate())
  return (
    <div className='app'>
      <Phrase
        sequence={sequence}
        updateSequence={() => (regenerateSequence(regenerate()))}
      />
    </div>
  )
}

const regenerate = () => {
  const r = randoms(24)

  const noteGen = generateNote(0.6, ['c'])
  const sequenceGen = generateSequence(noteGen)(3)
  return sequenceGen(r)
}

export default App

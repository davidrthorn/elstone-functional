/* eslint-disable */
import React, { useState } from 'react'
import './App.css'
import Phrase from './components/Phrase/index'
import FavouriteButton from './components/Button/FavouriteButton'
import RegenerateButton from './components/Button/RegenerateButton'

import generateNote, { randoms } from './services/NoteGenerator'
import generateSequence from './services/SequenceGenerator'

const App = () => {
  const [sequence, newSequence] = useState('c'.repeat(24))
  return (
    <div className='App'>
      <Phrase
        sequence={sequence}
      />
      <FavouriteButton />
      <RegenerateButton
        updateSequence={() => {
          newSequence(regenerate())
        }}
      />
    </div>
  )
}

const regenerate = () => {
  const r = randoms(24)
  const noteGen = generateNote(0.6, ['c', 'E'])
  const sequenceGen = generateSequence(noteGen)(3)
  return sequenceGen(r)
}

export default App

/* eslint-disable */
import React, { useState, useEffect } from 'react'

import './App.css'
import Phrase from './components/Phrase/index'
import FavouriteButton from './components/Button/FavouriteButton'
import GenerateButton from './components/Button/GenerateButton'

import generateNote, { randoms } from './services/NoteGenerator'
import generateSequence from './services/SequenceGenerator'

const App = () => {
  const [sequence, newSequence] = useState('c'.repeat(24))
  const [active, setActive] = useState(false)

  useEffect(async () => {
      setActive(isFavourite(sequence))
    }
  )

  return (
    <div className='App'>
      <Phrase
        sequence={sequence}
      />
      <FavouriteButton active={active}/>
      <GenerateButton
        updateSequence={() => {
          newSequence(Generate())
        }}
      />
    </div>
  )
}

const Generate = () => {
  const r = randoms(24)
  const noteGen = generateNote(0.6, ['c', 'E'])
  const sequenceGen = generateSequence(noteGen)(3)
  return sequenceGen(r)
}

const isFavourite = async notes => {
  const url = process.env.REACT_APP_API_GATEWAY_URL + '/favourite/' + notes
  const res = await window.fetch(url)
  const j = await res.json()
  return j.isFavourite
}

export default App

/* eslint-disable */
import React, { useState, useEffect } from 'react'

import './App.css'
import Phrase from './components/Phrase/Phrase'
import FavouriteButton from './components/Button/FavouriteButton'
import GenerateButton from './components/Button/GenerateButton'

import generateNote, { randoms } from './services/NoteGenerator'
import generateSequence from './services/SequenceGenerator'

const App = () => {
  const [sequence, setSequence] = useState('c'.repeat(24))
  const [active, setActive] = useState(false)

  const setFavourite = async () => {
      setActive(await isFavourite(sequence))
  }

  useEffect(() => {
      setFavourite()
    }, [])

  return (
    <div className='App'>
      <Phrase
        sequence={sequence}
      />
      <FavouriteButton
        active={active} addFavourite={async () => {
          const status = await addFavourite(sequence) === 200
          setActive(status)
        }}
      />
      <GenerateButton
        generate={async () => {
          const sq = Generate()
          setActive(await isFavourite(sq))
          setSequence(sq)
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

const addFavourite = notes => async () => {
  const url = process.env.REACT_APP_API_GATEWAY_URL + '/favourite/' + notes
  // POST THAT SHIT
  console.log("I dun posted a favourite")
  return 200
}

export default App

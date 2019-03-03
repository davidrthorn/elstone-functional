import React, { Component } from 'react'
import './App.css'
import Phrase from './components/Phrase/index'
import FavouriteButton from './components/Controls/Button/FavouriteButton/index'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Phrase />
        <FavouriteButton />
      </div>
    )
  }
}

export default App

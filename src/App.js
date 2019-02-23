import React, { Component } from 'react';
import './App.css';

import abc from 'abcjs'
import { generateNote } from 'services/NoteGenerator'
import generateSequence from 'services/SequenceGenerator'
import interpret from 'services/AbcInterpreter'
import combineSequences from 'services/SequenceCombiner'

class App extends Component {
  componentDidMount() {

    const noteGenerator = generateNote(1)(['c', 'D', 'F', 'e'])
    const sequenceGenerator = generateSequence(noteGenerator)(3)

    const s1 = sequenceGenerator(Array(12).fill(0).map(Math.random))
    const sequence = combineSequences([s1])

    this.renderBars(this.compileNoteString(interpret(3, 12, sequence)))
  }

  render () {
    return (
      <div className="App">
        <div id="paper"></div>
      </div>
    )
  }

  compileNoteString = noteString => `%%flatbeams 1
        M: 4/4
        K: clef=perc
        V:all stems=up
        |:${noteString}:|`

  renderBars = noteString => {
    abc.renderAbc(
      "paper",
      noteString,
      {
        scale: 2,
        add_classes: true,
        staffwidth: 600,
      },
      {},
      {
        oneSvgPerLine: true,
      }
    )
  }
}

export default App

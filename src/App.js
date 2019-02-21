import React, { Component } from 'react';
import './App.css';

import abc from 'abcjs'
import { generateNote } from './modules/sequence/NoteGenerator/NoteGenerator'
import { generateSequence } from './modules/sequence/SequenceGenerator/SequenceGenerator'
import { combineSequences } from './modules/sequence/SequenceCombiner/SequenceCombiner'
import AbcInterpreter from './modules/abc_interpreter/Interpreter/Interpreter'

class App extends Component {

  componentDidMount() {

    const noteGenerator = generateNote(0.8)(['c', 'D'])
    const sequenceGenerator = generateSequence(noteGenerator)(3)

    const s1 = sequenceGenerator(Array(24).fill(0).map(Math.random))
    const s2 = sequenceGenerator(Array(24).fill(0).map(Math.random))

    const sequence = combineSequences([s1, s2])
    const interpreter = new AbcInterpreter()
    this.renderBars(this.compileNoteString(interpreter.interpretSequence(sequence, 3)))
  }

  render() {
    return (
      <div className="App">
        <div id="paper"></div>
      </div>
    )
  }

  compileNoteString = (noteString) => `%%flatbeams 1
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
        staffwidth: 900,
      },
      {},
      {
        oneSvgPerLine: true,
      }
    )
  }
}

export default App;

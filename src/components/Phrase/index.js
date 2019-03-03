import React, { Component } from 'react';

import abc from 'abcjs';
import generateNote from '../../services/NoteGenerator'
import generateSequence from '../../services/SequenceGenerator'
import combineSequences from '../../services/SequenceCombiner'
import interpret from '../../services/AbcInterpreter'

class Phrase extends Component {
  componentDidMount() {

    const sequenceGenerator = generateSequence(
      generateNote(0.6)(['c', 'D'])
    )(3)

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

export default Phrase;

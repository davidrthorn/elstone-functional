import React, { Component } from 'react';
import './Phrase.css';

import abc from 'abcjs';
import PhraseBuilder from './modules/phrase/PhraseBuilder';

class Phrase extends Component {

  componentDidMount() {
    const pb = new PhraseBuilder();
    const phrase = pb.create({
      lastNote: 'z',
      density: 1,
      range: ['A', 'c', 'e', 'D'],
    });
    phrase.init(1);

    this.renderBars(this.compileNoteString(phrase.getFormattedString()));
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
        ${noteString}`

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
    )
  }
}

export default Phrase;

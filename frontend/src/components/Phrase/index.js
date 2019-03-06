import React, { useEffect } from 'react'

import abc from 'abcjs'
import interpret from '../../services/AbcInterpreter'

const Phrase = ({ sequence }) => {
  const notes = interpret(3, sequence)

  useEffect(() => {
    abc.renderAbc(
      'paper',
      notes,
      {
        scale: 2,
        add_classes: true,
        staffwidth: 800
      }
    )
  })

  return (
    <>
      <div id='paper' />
    </>
  )
}

export default Phrase

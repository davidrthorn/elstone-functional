import React from 'react'

const RegenerateButton = ({ updateSequence }) => {
  return (
    <>
      <button onClick={updateSequence}>Regenerate</button>
    </>
  )
}

export default RegenerateButton

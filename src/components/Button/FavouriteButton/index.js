import React, { useState } from 'react'

const FavouriteButton = () => {
  const active = useState('active')
  let color = 'white'
  Promise.resolve(active).then(data => { color = 'green' })

  return (
    <>
      <button style={{ backgroundColor: color }}>Add to favourites</button>
    </>
  )
}

export default FavouriteButton

import React from 'react'

const FavouriteButton = ({ active }) => {
  return (
    <>
      <button style={{ backgroundColor: active ? 'green' : 'red' }}>Add to favourites</button>
    </>
  )
}

export default FavouriteButton

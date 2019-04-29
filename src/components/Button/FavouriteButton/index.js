import React from 'react'

const FavouriteButton = ({ active, addFavourite }) => {
  return (
    <>
      <button
        style={{ backgroundColor: active ? 'green' : 'red' }}
        onClick={addFavourite}
      >Add to favourites</button>
    </>
  )
}

export default FavouriteButton

import React from 'react'

const FavouriteButton = () => {
  return (
    <>
      <button onClick={isFavourite}>Add to favourites</button>
    </>
  )
}

const isFavourite = async () => {
  const url = process.env.REACT_APP_API_GATEWAY_URL + '/favourite/ccc'
  const res = await window.fetch(url)
  console.log(await res.status)
}

export default FavouriteButton

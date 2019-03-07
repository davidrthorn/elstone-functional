import React from 'react'

const FavouriteButton = () => {

  return (
    <>
      <button onClick={() => { getShit }}>Add to favourites</button>
    </>
  )
}

const getShit = async () => {
  const url = process.env.REACT_APP_API_GATEWAY_URL
  await fetch(url)
}

export default FavouriteButton

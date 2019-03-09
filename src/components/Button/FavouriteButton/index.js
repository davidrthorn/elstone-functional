import React from 'react'

const FavouriteButton = () => {
  return (
    <>
      <button onClick={getShit}>Add to favourites</button>
    </>
  )
}

const getShit = async () => {
  const url = process.env.REACT_APP_API_GATEWAY_URL
  const res = await window.fetch(url)
  const data = await res.json()
  console.log(data.body)
}

export default FavouriteButton

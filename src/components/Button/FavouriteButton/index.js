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
  let res = await window.fetch(url)
  res.json()
    .then(j => {
      console.log(j)
    })
    .catch(err => {
      console.log(err)
    })
}

export default FavouriteButton

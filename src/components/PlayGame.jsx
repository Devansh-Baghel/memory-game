import React from 'react'

function PlayGame(props) {

  function getCards(number) {
    // makes api calls for the number of cards
  }

  if (props.gamemode === "easy") {
    getCards(6)
  }
  else if (props.gamemode === "medium") {
    getCards(10)
  }
  else if (props.gamemode === "hard") {
    getCards(14)
  }


  return (
    <div>
      <h1>Game Starting</h1>
      <h2>Playing on {props.gamemode} difficulty</h2>
    </div>
  )
}

export default PlayGame

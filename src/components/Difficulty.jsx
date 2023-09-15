import React from 'react'
import { useState } from 'react'

function Difficulty() {
  const [gamemode, setGamemode] = useState("easy")
  const [startGame, setStartGame] = useState(false)

  if (startGame) {
    return (
      <div>
        <h1>Game Starting</h1>
        <h2>Playing on {gamemode} difficulty</h2>
      </div>
    )
  }

  else {
    return (
      <dialog open>
        <h2>Choose Difficulty</h2>
        <button onClick={() => {setGamemode("easy")}}>Easy</button>
        <button onClick={() => {setGamemode("medium")}}>Medium</button>
        <button onClick={() => {setGamemode("hard")}}>Hard</button>
        <h3>Difficulty has been set to {gamemode}</h3>
        <button onClick={() => {setStartGame(true)}}>Play</button>
      </dialog>   
    )
  }
}

export default Difficulty

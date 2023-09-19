import React from 'react'
import { useState } from 'react'
import PlayGame from './PlayGame'
import "../styles/App.scss"

function App() {
  const [gamemode, setGamemode] = useState("easy")
  const [startGame, setStartGame] = useState(false)

  if (startGame) {
    return (
      <PlayGame gamemode={gamemode} />
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

export default App

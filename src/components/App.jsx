import React from "react";
import { useState } from "react";
import PlayGame from "./PlayGame";
import "../styles/App.scss";

function App() {
  const [gamemode, setGamemode] = useState("easy");
  const [startGame, setStartGame] = useState(false);

  if (startGame) {
    return <PlayGame gamemode={gamemode} />;
  } else {
    return (
      <dialog open>
        <h2>Choose Difficulty</h2>
        <button
          onClick={() => {
            setGamemode("easy");
            setStartGame(true)
          }}
        >
          Easy
        </button>
        <button
          onClick={() => {
            setGamemode("medium");
            setStartGame(true)
          }}
        >
          Medium
        </button>
        <button
          onClick={() => {
            setGamemode("hard");
            setStartGame(true)
          }}
        >
          Hard
        </button>
      </dialog>
    );
  }
}

export default App;

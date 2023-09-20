import React from "react";
import { useState } from "react";
import PlayGame from "./PlayGame";
import "../styles/App.scss";
import "../index.css"

function App() {
  const [gamemode, setGamemode] = useState("easy");
  const [startGame, setStartGame] = useState(false);

  if (startGame) {
    return <PlayGame gamemode={gamemode} />;
  } else {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <h2 className="">Choose Difficulty</h2>
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
      </div>
    );
  }
}

export default App;

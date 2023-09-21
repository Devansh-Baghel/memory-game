import React from "react";
import { useState } from "react";
import PlayGame from "./PlayGame";
import "../styles/App.scss";
import "../index.css";

function App() {
  const [gamemode, setGamemode] = useState("easy");
  const [startGame, setStartGame] = useState(false);

  if (startGame) {
    return <PlayGame gamemode={gamemode} />;
  } else {
    return (
      <div className="flex items-center justify-center w-screen h-screen flex-col gap-20 bg-slate-950 text-slate-200">
        <h2 className="text-5xl">Choose Difficulty</h2>
        <ul className="text-xl text-center">
          <li><span className="text-green-500">EASY: </span>You will have to remember 6 flags</li>
          <li><span className="text-yellow-400">MEDIUM: </span>You will have to remember 10 flags</li>
          <li><span className="text-red-500">HARD: </span>You will have to remember 14 flags</li>
        </ul>
        <div className="flex gap-10 text-3xl text-slate-200">
          <button
            className="px-7 bg-slate-900 hover:text-green-500 py-3 rounded-xl hover:bg-slate-800"
            onClick={() => {
              setGamemode("easy");
              setStartGame(true);
            }}
          >
            Easy &rArr;
          </button>
          <button
            className="px-7 bg-slate-900 hover:text-yellow-400 py-3 rounded-xl hover:bg-slate-800"
            onClick={() => {
              setGamemode("medium");
              setStartGame(true);
            }}
          >
            Medium &rArr;
          </button>
          <button
            className="px-7 bg-slate-900 hover:text-red-500 py-3 rounded-xl hover:bg-slate-800"
            onClick={() => {
              setGamemode("hard");
              setStartGame(true);
            }}
          >
            Hard &rArr;
          </button>
        </div>
      </div>
    );
  }
}

export default App;

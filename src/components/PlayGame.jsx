import React, { useState } from "react";
import { useEffect } from "react";

function PlayGame(props) {
  const [currScore, setCurrScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const countries = [
    "kr",
    "se",
    "id",
    "ca",
    "za",
    "br",
    "jp",
    "dk",
    "bt",
    "fr",
    "ru",
    "au",
    "it",
    "in",
  ];

  const obj = {
    easy: countries.slice(0, 6),
    medium: countries.slice(0, 10),
    hard: countries,
  };

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const [randomCountries, setRandomCountries] = useState([]);

  useEffect(() => {
    const shuffledArray = shuffle(obj[props.gamemode]);
    setRandomCountries(shuffledArray);
  }, [props.gamemode]);

  const handleRandomizeClick = (e) => {
    if (e.target.className !== "clicked") {
      setCurrScore(currScore + 1);
      e.target.className = "clicked"
    }
    const shuffledArray = shuffle(obj[props.gamemode]);
    setRandomCountries(shuffledArray);
  };

  return (
    <div>
      <h1>Game Starting</h1>
      <h2>Score: {currScore}</h2>
      <h2>High Score: {bestScore}</h2>
      <h2>Playing on {props.gamemode} difficulty</h2>
      {randomCountries.map((country, index) => (
        <img
          key={index}
          src={`https://flagcdn.com/w320/${country}.png`}
          alt={country}
          onClick={(e) => {handleRandomizeClick(e)}}
        />
      ))}
      <button onClick={handleRandomizeClick}>Randomize</button>
    </div>
  );
}

export default PlayGame;

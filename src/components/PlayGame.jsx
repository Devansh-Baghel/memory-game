import React, { useState } from "react";
import { useEffect } from "react";

function PlayGame(props) {
  const [currScore, setCurrScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameOver, setGameOver] = useState(false);

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

  const [clickedCountry, setClickedCountry] = useState([])

  const handleRandomizeClick = (e) => {
    if (clickedCountry.includes(e.target.alt) === false) {
      setCurrScore(currScore + 1)
      setClickedCountry([...clickedCountry, e.target.alt])
    } else {
      setGameOver(true)
    }
    const shuffledArray = shuffle(obj[props.gamemode]);
    setRandomCountries(shuffledArray);
  };


  const playAgain = () => {
    setCurrScore(0)
    setClickedCountry([])
    setGameOver(false)
  }


  if (!gameOver) {
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
      </div>
    );
  } else {
    return (
      <div className="game-over">
        <h1>Game Over</h1>
        <h2>Your Score is {currScore}</h2>
        <h2>High Score is {bestScore}</h2>
        <button onClick={playAgain}>Play Again?</button>
      </div>
    )
  }
}

export default PlayGame;

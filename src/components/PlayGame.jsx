import React from "react";
import axios from "axios";

function PlayGame(props) {
  const countries = [
    "Republic of india",
    "australia",
    "brazil",
    "japan",
    "china",
    "sweden",
    "south africa",
    "canada",
    "france",
    "indonesia",
    "denmark",
    "italy",
    "russia",
    "bhutan",
  ];

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  function getCards(number) {
    // 1. Pick 6,10,14 number of countries from the list above
    // 2. Make that many api calls and get flags of them stored up

    const shuffledCountries = shuffle(countries);
    axios
      .get(`https://restcountries.com/v3.1/name/${shuffledCountries[0]}`)
      .then((res) => {
        console.log(res.data[0].flags.png);
      });
  }
  
  getCards(12);

  if (props.gamemode === "easy") {
    getCards(6);
  } else if (props.gamemode === "medium") {
    getCards(10);
  } else if (props.gamemode === "hard") {
    getCards(14);
  }

  return (
    <div>
      <h1>Game Starting</h1>
      <h2>Playing on {props.gamemode} difficulty</h2>
    </div>
  );
}

export default PlayGame;

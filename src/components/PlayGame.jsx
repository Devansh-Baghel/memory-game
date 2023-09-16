import React from "react";

function PlayGame(props) {
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

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // 1. Pick 6,10,14 number of countries from the list above
  // okkay new plan, not gonna get the flags from an api.

  const randomCountries = shuffle(countries);
  console.log(randomCountries);

  if (props.gamemode === "easy") {
    return (
      <div>
        <h1>Game Starting</h1>
        <h2>Playing on {props.gamemode} difficulty</h2>
        <img src={`https://flagcdn.com/w320/${randomCountries[0]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[1]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[2]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[3]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[4]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[5]}.png`} />
      </div>
    );
  } else if (props.gamemode === "medium") {
    return (
      <div>
        <h1>Game Starting</h1>
        <h2>Playing on {props.gamemode} difficulty</h2>
        <img src={`https://flagcdn.com/w320/${randomCountries[0]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[1]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[2]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[3]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[4]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[5]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[6]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[7]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[8]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[9]}.png`} />
      </div>
    );
  } else if (props.gamemode === "hard") {
    return (
      <div>
        <h1>Game Starting</h1>
        <h2>Playing on {props.gamemode} difficulty</h2>
        <img src={`https://flagcdn.com/w320/${randomCountries[0]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[1]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[2]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[3]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[4]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[5]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[6]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[7]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[8]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[9]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[10]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[11]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[12]}.png`} />
        <img src={`https://flagcdn.com/w320/${randomCountries[13]}.png`} />
      </div>
    );
  }
}

export default PlayGame;

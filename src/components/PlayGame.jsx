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

  const obj = {
    easy: countries.slice(0,6),
    medium: countries.slice(0,10),
    hard: countries,
  }

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  if (props.gamemode === "easy") {
    const randomCountries = shuffle(obj.easy);

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
        {/* <button onClick={() => {setRandomCountries(shuffle(countries))}}>Randomize</button> */}
      </div>
    );
  } else if (props.gamemode === "medium") {
    const randomCountries = shuffle(obj.medium);

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
        {/* <button onClick={() => {setRandomCountries(shuffle(countries))}}>Randomize</button> */}
      </div>
    );
  } else if (props.gamemode === "hard") {
    const randomCountries = shuffle(obj.hard);

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
        {/* <button onClick={() => {setRandomCountries(shuffle(countries))}}>Randomize</button> */}
      </div>
    );
  }
}

export default PlayGame;

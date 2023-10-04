import React, { useState } from 'react';
import { useEffect } from 'react';
import Footer from './Footer';

function PlayGame(props) {
	const [currScore, setCurrScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [gameState, setGameState] = useState('playing');
	const [buttonColorClass, setButtonColorClass] = useState(
		'hover:text-green-500'
	);

	useEffect(() => {
		if (props.gamemode === 'medium') {
			setButtonColorClass('hover:text-yellow-400');
		} else if (props.gamemode === 'hard') {
			setButtonColorClass('hover:text-red-400');
		}
	}, []);

	const countries = [
		'kr',
		'se',
		'id',
		'za',
		'br',
		'jp',
		'bt',
		'fr',
		'ru',
		'it',
		'in',
		'dk',
		'au',
		'ca',
	];

	const obj = {
		easy: countries.slice(0, 4),
		medium: countries.slice(0, 8),
		hard: countries.slice(0, 12),
	};

	const shuffle = (array) => {
		return array.sort(() => Math.random() - 0.5);
	};

	const [randomCountries, setRandomCountries] = useState([]);

	useEffect(() => {
		const shuffledArray = shuffle(obj[props.gamemode]);
		setRandomCountries(shuffledArray);
	}, [props.gamemode]);

	const [clickedCountry, setClickedCountry] = useState([]);

	const handleRandomizeClick = (e) => {
		if (clickedCountry.includes(e.target.alt) === false) {
			if (currScore >= bestScore) {
				setBestScore(currScore + 1);
			}

			setCurrScore(currScore + 1);
			setClickedCountry([...clickedCountry, e.target.alt]);

			if (currScore + 1 === obj[props.gamemode].length) {
				setGameState('won');
			}
		} else {
			setGameState('lost');
		}
		const shuffledArray = shuffle(obj[props.gamemode]);
		setRandomCountries(shuffledArray);
	};

	const playAgain = () => {
		setCurrScore(0);
		setClickedCountry([]);
		setGameState('playing');
	};

	if (gameState === 'playing') {
		return (
			<div className="bg-slate-950 text-slate-200 px-20 py-10 flex flex-col justify-center text-xl items-center">
				<h1 className="text-5xl text-center pb-5">Remember The Flag!</h1>
				<h2>Score: {currScore}</h2>
				<h2>High Score: {bestScore}</h2>

				<div className="grid grid-cols-4 gap-8 pt-5">
					{randomCountries.map((country, index) => (
						<img
							className="h-[200px]"
							key={index}
							src={`https://flagcdn.com/w320/${country}.png`}
							alt={country}
							onClick={(e) => {
								handleRandomizeClick(e);
							}}
						/>
					))}
				</div>
			</div>
		);
	} else if (gameState === 'lost') {
		return (
			<>
				<div className="h-screen">
					<div className="bg-slate-950 w-screen h-4/5 text-slate-200 text-2xl flex flex-col justify-center items-center">
						<h1 className="text-5xl mb-8">Game Over</h1>
						<h2>Your Score is {currScore}</h2>
						<h2>High Score is {bestScore}</h2>
						<button
							className={`px-7 bg-slate-900 ${buttonColorClass} py-3 rounded-xl hover:bg-slate-800 mt-8`}
							onClick={playAgain}
						>
							Play Again?
						</button>
						<button
							className={`px-7 bg-slate-900 ${buttonColorClass} py-3 rounded-xl hover:bg-slate-800 mt-8`}
							onClick={() => {
								window.location.reload();
							}}
						>
							Change Difficulty?
						</button>
					</div>
					<Footer />
				</div>
			</>
		);
	} else if (gameState === 'won') {
		return (
			<div className="h-screen">
				<div className="bg-slate-950 w-screen h-4/5 text-slate-200 text-2xl flex flex-col justify-center items-center">
					<h1 className="text-5xl mb-8">You Win!!</h1>
					<button
						className={`px-7 bg-slate-900 ${buttonColorClass} py-3 rounded-xl hover:bg-slate-800`}
						onClick={playAgain}
					>
						Play Again?
					</button>
					<button
						className={`px-7 bg-slate-900 ${buttonColorClass} py-3 rounded-xl hover:bg-slate-800 mt-8`}
						onClick={() => {
							window.location.reload();
						}}
					>
						Change Difficulty?
					</button>
				</div>
				<Footer />
			</div>
		);
	}
}

export default PlayGame;

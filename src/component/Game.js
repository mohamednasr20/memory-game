import React, { useState, useEffect } from "react";
import ScoreBoard from "./ScoreBoard";
import axios from "axios";
import CardGrids from "./CardGrid";
import EndGame from "./EndGame";

const Game = () => {
  const highScore = localStorage.getItem("highestScore")
    ? localStorage.getItem("highestScore")
    : 0;
  const [score, setScore] = useState(0);
  const [pokeNames, SetPokemNames] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const gameRestart = () => {
    setGameOver(!gameOver);
    setScore(0);
    setSelectedNames([]);
  };

  const selectPokemon = (name) => {
    if (selectedNames.includes(name)) {
      highScore < score && localStorage.setItem("highestScore", score);
      setGameOver(!gameOver);
    } else {
      setSelectedNames([...selectedNames, name]);
      setScore(selectedNames.length + 1);

      SetPokemNames(shuffle(pokeNames));
    }
  };

  useEffect(() => {
    const getImages = async () => {
      let res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=32");
      let pokes = res.data.results;

      let names = pokes.map((poke, index) => ({ poke: poke.name, index }));

      SetPokemNames(names);
    };
    getImages();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center py-4 display-3 text-secondary">
        Memory Game!
      </h1>
      {gameOver ? (
        <EndGame
          score={score}
          highScore={highScore}
          gameRestart={gameRestart}
        />
      ) : (
        <div className="m-auto">
          <ScoreBoard score={score} highScore={highScore} />
          <CardGrids pokeNames={pokeNames} selectPokemon={selectPokemon} />
        </div>
      )}
    </div>
  );
};

export default Game;

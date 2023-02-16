import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    let newGuess = {
      guess,
      id: Math.random(),
    };
    let nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
    console.log(nextGuesses);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;

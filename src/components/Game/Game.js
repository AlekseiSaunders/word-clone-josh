import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [winner, setWinner] = React.useState(false);
  const [endGame, setEndGame] = React.useState(false);

  function addGuess(guess) {
    let newGuess = guess;
    let nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setWinner(true);
    }
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setEndGame(true);
    }
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        winner={winner}
        addGuess={addGuess}
        endGame={endGame}
        guesses={guesses}
        answer={answer}
      />
    </>
  );
}

export default Game;

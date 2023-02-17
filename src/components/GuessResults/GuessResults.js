import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        if (!guesses[num]) {
          return (
            <p className="guess" key={num}>
              {range(5).map((num) => {
                return <span className="cell" key={num}></span>;
              })}
            </p>
          );
        } else {
          let guessText = Array.from(guesses[num].guess);
          return (
            <p className="guess" key={num}>
              {guessText.map((letter, index) => {
                return (
                  <span className="cell" key={index}>
                    {letter}
                  </span>
                );
              })}
            </p>
          );
        }
      })}
    </div>
  );
}

export default GuessResults;

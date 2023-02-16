import React from 'react';

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return <p key={guess.id}>{guess.guess}</p>;
      })}
    </div>
  );
}

export default GuessList;

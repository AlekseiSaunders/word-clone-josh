import React from 'react';
import InputField from '../InputField';

function GuessInput({ addGuess, winner, endGame, guesses, answer }) {
  const [guess, setGuess] = React.useState('');

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          addGuess(guess);
          setGuess('');
        }}
      >
        <label htmlFor="guess-input">Enter Guess:</label>
        {endGame ? (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        ) : !winner ? (
          <InputField guess={guess} setGuess={setGuess} />
        ) : (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {guesses.length} guesses</strong>.
            </p>
          </div>
        )}
      </form>
    </>
  );
}

export default GuessInput;

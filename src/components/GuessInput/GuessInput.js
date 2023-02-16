import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(guess);
          setGuess('');
        }}
      >
        <label htmlFor="guess-input">Enter Guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          pattern="[a-zA-Z]{5,5}"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        ></input>
      </form>
      <p>Your Guess is: {guess}</p>
    </>
  );
}

export default GuessInput;

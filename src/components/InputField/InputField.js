import React from 'react';

function InputField({ guess, setGuess }) {
  return (
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
  );
}

export default InputField;

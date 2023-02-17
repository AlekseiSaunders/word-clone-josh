import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  if (!value) {
    return (
      <p className="guess">
        {range(5).map((num) => (
          <span key={num} className="cell"></span>
        ))}
      </p>
    );
  }
  if (value) {
    let styles = checkGuess(value, answer);
    let letterStatus = styles.map((letter) => letter.status);
    return (
      <p className="guess">
        {range(5).map((num) => (
          <span key={num} className={`cell ${letterStatus[num]}`}>
            {value ? value[num] : undefined}
          </span>
        ))}
      </p>
    );
  }
}

export default Guess;

import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = !status ? 'cell' : `cell ${status}`;

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
  // if (!value) {
  //   return (
  //     <p className="guess">
  //       {range(5).map((num) => (
  //         <span key={num} className="cell"></span>
  //       ))}
  //     </p>
  //   );
  // }
  // if (value) {
  //   let styles = checkGuess(value, answer);
  //   let letterStatus = styles.map((letter) => letter.status);
  //   return (
  //     <p className="guess">
  //       {range(5).map((num) => (
  //         <span key={num} className={`cell ${letterStatus[num]}`}>
  //           {value ? value[num] : undefined}
  //         </span>
  //       ))}
  //     </p>
  //   );
  // }
}

export default Guess;

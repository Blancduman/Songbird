import React from 'react';
import PropTypes from 'prop-types';

import './EndGame.scss';

const EndGame = ({ score, reset }) => {
  if (score === 30) {
    return (
      <>
        <div className="endgame">
          <h1>Поздравляем!</h1>
          <p>
            Вы прошли викторины и набрали все
            <strong>{` ${score} `}</strong>
            из
            <strong> 30 </strong>
            Баллов возможных!
          </p>
        </div>
        <footer className="enabled" onClick={() => reset({ type: 'RESET' })} role="presentation">
          Попробывать ещё раз?
        </footer>
      </>
    );
  }
  return (
    <>
      <div className="endgame">
        <h1>Поздравляем!</h1>
        <p>
          Вы прошли викторины и набрали все
          <strong>{` ${score} `}</strong>
          Баллов из
          <strong> 30 </strong>
        </p>
      </div>
      <footer className="enabled" onClick={() => reset({ type: 'RESET' })} role="presentation">
        Попробывать ещё раз?
      </footer>
    </>
  );
};

EndGame.defaultProps = {
  score: 0,
  reset: null,
};

EndGame.propTypes = {
  score: PropTypes.number,
  reset: PropTypes.func,
};

export default EndGame;

import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({ stageFinished, nextStage, finished }) => {
  return (
    <footer
      onClick={() => {
        if (stageFinished) {
          nextStage({ type: 'NEXT_LEVEL' });
        }
      }}
      className={`${stageFinished ? 'enabled' : ''}`}
      role="presentation"
    >
      {finished ? 'Конец' : 'Дальше'}
    </footer>
  );
};

Footer.defaultProps = {
  stageFinished: '',
  nextStage: null,
  finished: false,
};

Footer.propTypes = {
  stageFinished: PropTypes.bool,
  nextStage: PropTypes.func,
  finished: PropTypes.bool,
};

export default Footer;

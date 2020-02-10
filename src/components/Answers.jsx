import React from 'react';
import PropTypes from 'prop-types';

import './Answers.scss';

const Answers = props => {
  const { answers } = props;
  const list = answers.map(item => <li>{item}</li>);

  return <ul>{list}</ul>;
};

Answers.defaultProps = {
  answers: [''],
};

Answers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string),
};

export default Answers;

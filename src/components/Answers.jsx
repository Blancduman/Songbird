import React from 'react';
import PropTypes from 'prop-types';

import './Answers.scss';

const Answers = props => {
  const { answers, selectBird } = props;
  if (!answers) return null;
  const list = answers.map((item, index) => (
    <li
      onClick={() => {
        selectBird({ type: 'ANSWER', index });
      }}
      key={item.species}
      className={item.status}
      role="presentation"
    >
      {item.name}
    </li>
  ));

  return <ul>{list}</ul>;
};

Answers.defaultProps = {
  answers: [{ name: '' }],
  selectBird: null,
};

Answers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object),
  selectBird: PropTypes.func,
};

export default Answers;

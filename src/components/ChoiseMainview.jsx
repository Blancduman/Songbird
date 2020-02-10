import React from 'react';
import PropTypes from 'prop-types';
import randomBIRD from '../assets/images/RandomBird.jpg';
import './ChoiseMainview.scss';

const ChoiseMainview = props => {
  const { name, name2, audio, description } = props;
  return (
    <article className="choise-mainview">
      <aside className="choise">
        <div className="bird-image">
          <img src={randomBIRD} alt="Каркарыч!" />
        </div>
        <div className="bird-description">
          <h2>{name}</h2>
          <h3>{name2}</h3>
          {audio && (
            <audio controls>
              <source src={audio} type="audio/mpeg" />
              <track kind="captions" />
            </audio>
          )}
        </div>
      </aside>
      <p>{description}</p>
    </article>
  );
};

ChoiseMainview.defaultProps = {
  audio: null,
  name: '*****',
  name2: '*****',
  description: '',
};

ChoiseMainview.propTypes = {
  audio: PropTypes.objectOf(PropTypes.any),
  name: PropTypes.string,
  name2: PropTypes.string,
  description: PropTypes.string,
};

export default ChoiseMainview;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import Audio from './Audio';

import birdPicture from '../assets/images/RandomBird.jpg';

import './GuessBirdMainView.scss';

const API_KEY = 'a072e2ed0148e3628b3b79e4bf851b28';

const GuessBirdMainView = ({ bird, stageFinished }) => {
  if (!bird) return null;
  if (!stageFinished) {
    const { audio } = bird;
    return (
      <section>
        <div className="bird-image">
          <img src={birdPicture} alt="Try to guess?" />
        </div>
        <aside>
          <h3>****</h3>
          <Audio audio={audio} />
        </aside>
      </section>
    );
  }
  const { name, species, audio } = bird;
  const [imgSrc, setImgSrc] = useState('');
  const [errorchick, setErrorchick] = useState(0);
  useEffect(() => {
    (async birdName => {
      const response = await fetch(
        // `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tagmode=all&extras=urlm&format=json&nojsoncallback&tags=${birdName}`
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tagmode=all&per_page=10&page=1&format=json&nojsoncallback=1&tags=${birdName}`
      );
      const data = await response.json();
      const imgSource = data.photos.photo[Math.min(Math.floor(0 + Math.random() * 10))];
      setImgSrc(
        `http://farm${imgSource.farm}.staticflickr.com/${imgSource.server}/${imgSource.id}_${imgSource.secret}.jpg`
      );
    })(species);
  }, [species, errorchick]);
  return (
    <section>
      <div className="bird-image">
        <img
          src={imgSrc}
          alt={species}
          onError={e => {
            e.target.onError = null;
            setErrorchick(errorchick + 1);
          }}
        />
      </div>
      <aside>
        <h3>{name}</h3>
        <Audio audio={audio} />
      </aside>
    </section>
  );
};

GuessBirdMainView.defaultProps = {
  bird: null,
  stageFinished: false,
};

GuessBirdMainView.propTypes = {
  bird: PropTypes.shape({
    audio: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
  stageFinished: PropTypes.bool,
};

export default GuessBirdMainView;

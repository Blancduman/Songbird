import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import Audio from './Audio';
import './ChoiseMainview.scss';

const API_KEY = 'a072e2ed0148e3628b3b79e4bf851b28';

const ChoiseMainview = ({ bird }) => {
  if (!bird) {
    return (
      <article>
        <div>
          <h1 style={{ textAlign: 'center', padding: '15px 0' }}>Выберите птичку!</h1>
        </div>
      </article>
    );
  }

  const { name, species, audio, description } = bird;
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
    <article>
      <aside>
        <div className="bird-image">
          <img
            src={imgSrc}
            alt="Каркарыч!"
            onError={e => {
              e.target.onError = null;
              setErrorchick(errorchick + 1);
            }}
          />
        </div>
        <div className="bird-description">
          <h2>{name}</h2>
          <h3>{species}</h3>
          <Audio audio={audio} />
        </div>
      </aside>
      <p>{description}</p>
    </article>
  );
};

ChoiseMainview.defaultProps = {
  bird: null,
};

ChoiseMainview.propTypes = {
  bird: PropTypes.shape({
    name: PropTypes.string,
    species: PropTypes.string,
    audio: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    index: PropTypes.number,
  }),
};

export default ChoiseMainview;

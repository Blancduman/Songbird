import React from 'react';
import birdPicture from '../assets/images/RandomBird.jpg';
import birdSHOUT from '../assets/media/XC512582-190604_1087_Grus_tok.mp3';

import './GuessBirdMainView.scss';

const GuessBirdMainView = () => {
  return (
    <section className="guess-mainview">
      <div className="bird-image">
        <img src={birdPicture} alt="Try to guess?" />
      </div>
      <aside>
        <h3>****</h3>
        <audio controls>
          <source src={birdSHOUT} type="audio/mpeg" />
          <track kind="captions" />
        </audio>
      </aside>
    </section>
  );
};

export default GuessBirdMainView;

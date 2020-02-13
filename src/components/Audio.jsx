import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Audio = ({ audio }) => {
  if (!audio) return null;
  const [src, setSrc] = useState('');
  const media = useRef(null);
  useEffect(() => {
    setSrc(audio);
    media.current.pause();
    media.current.load();
  }, [audio]);
  return (
    <audio ref={media} controls>
      <source src={src} type="audio/mpeg" />
      <track kind="captions" />
    </audio>
  );
};

Audio.defaultProps = {
  audio: '',
};

Audio.propTypes = {
  audio: PropTypes.string,
};

export default Audio;

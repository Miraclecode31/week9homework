import React, { useState } from 'react';

const SongPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // This function can be removed if you no longer want play/pause functionality
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!song) return null;

  const { youtubeUrl } = song;
  const autoplayUrl = youtubeUrl + '?autoplay=1&controls=0';

  return (
    <div>
      <h3>Now Playing: {song.title} by {song.artist}</h3>
      <iframe
        width="560"
        height="315"
        src={autoplayUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={song.title}
      ></iframe>
      
      {/* Remove the button that controls play/pause */}
      {/* <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
    </div>
  );
};

export default SongPlayer;

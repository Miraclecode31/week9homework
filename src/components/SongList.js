import React from 'react';

const songsData = [
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    youtubeUrl: 'https://www.youtube.com/embed/4NRXx6U8ABQ',
  },
  {
    title: 'Not Like Us',
    artist: 'Kendrick Lamar',
    // youtubeUrl: 'https://youtu.be/T6eK-2OQtew?si=3glqocp7abBPy-8B',
    youtubeUrl: 'https://www.youtube.com/embed/T6eK-2OQtew',
  },
  {
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    youtubeUrl: 'https://www.youtube.com/embed/DyDfgMOUjCI',
  },
];

const SongList = ({ onSongSelect }) => {
  return (
    <div>
      
      <h3>Select which song you would like to hear below:</h3>
      <ul>
        {songsData.map((song, index) => (
          <li key={index}>
            {song.title} - {song.artist}
            {/* Add a select button */}
            <button onClick={() => onSongSelect(song)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;

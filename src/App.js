import React, { useState } from 'react';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import './App.css'; // Make sure the CSS file is imported

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="App">
      <h2 className="header">GRAMMY AWARD WINNING SONGS</h2>
      <SongList onSongSelect={handleSongSelect} />
      <SongPlayer song={selectedSong} />
    </div>
  );
}

export default App;

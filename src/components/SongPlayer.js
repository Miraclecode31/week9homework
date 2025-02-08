const SongPlayer = ({ song }) => {
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
    </div>
  );
};

export default SongPlayer;

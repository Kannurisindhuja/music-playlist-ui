// src/App.js
import React, { useRef, useState } from "react";

const songs = [
  "/music/sample-song.mp3", // You can add more MP3 paths here
  "/music/sample2-song.mp3", 
  "/music/sample3-song.mp3", 
  // "/music/another.mp3",
];

function App() {
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const play = () => {
    audioRef.current.play();
  };

  const pause = () => {
    audioRef.current.pause();
  };

  const next = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const prev = () => {
    setCurrentSongIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎵 Music Playlist</h1>
      <audio ref={audioRef} src={songs[currentSongIndex]} controls />
      <div style={{ marginTop: "20px" }}>
        <button onClick={prev}>⏮️ Previous</button>
        <button onClick={play}>▶️ Play</button>
        <button onClick={pause}>⏸️ Pause</button>
        <button onClick={next}>⏭️ Next</button>
      </div>
    </div>
  );
}

export default App;

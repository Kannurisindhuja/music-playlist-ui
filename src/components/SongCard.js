// src/components/SongCard.js
import React from 'react';
import './SongCard.css';

function SongCard({ title }) {
  return (
    <div className="song-card">
      <h2>{title}</h2>
    </div>
  );
}

export default SongCard;

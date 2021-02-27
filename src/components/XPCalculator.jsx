import React, { useState } from 'react';
import styles from './calculator.module.css';

export default () => {
  const [songsGuessed, setSongsGuessed] = useState(0);
  const [songsPlayed, setSongsPlayed] = useState(0);
  const [minutesPlayed, setMinutesPlayed] = useState(1);
  const [won, setWon] = useState(false);

  return (
    <div className={styles.calc}>
      <label for="guessed">Songs Guessed</label>
      <input
        id="guessed"
        type="number"
        value={songsGuessed}
        onChange={(e) => {
          const value = +e.target.value;
          if (value && value >= 0 && value <= songsPlayed)
            setSongsGuessed(value);
        }}
        placeholder="0"
      />

      <label for="played">Songs Played</label>
      <input
        id="played"
        value={songsPlayed}
        min="0"
        onChange={(e) => setSongsPlayed(+e.target.value)}
        type="number"
        placeholder="0"
      />

      <label for="minutes">Minutes Played</label>
      <input
        id="minutes"
        value={minutesPlayed}
        onChange={(e) => setMinutesPlayed(+e.target.value)}
        type="number"
        placeholder="1"
      />

      <label for="won">Did You Win?</label>
      <input
        id="won"
        value={won}
        onClick={() => setWon(!won)}
        type="checkbox"
      />

      <h3>
        {Math.round(
          (songsGuessed / songsPlayed) * minutesPlayed * (won ? 1500 : 1000)
        ) || 0}{' '}
        XP Earned
      </h3>
    </div>
  );
};

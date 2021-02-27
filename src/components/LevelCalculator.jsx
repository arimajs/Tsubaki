import React, { useState } from 'react';
import styles from './calculator.module.css';

export default () => {
  const [xp, setXp] = useState(0);
  return (
    <div className={styles.calc}>
      <label for="xp">XP Earned</label>
      <input
        id="xp"
        value={xp}
        type="number"
        min="0"
        placeholder="0"
        step="200"
        onChange={(e) =>
          setXp((+e.target.value || -1) < 0 ? xp : +e.target.value)
        }
      />

      <h3>
        {Math.floor(
          xp > 62500 ? 25 + (xp - 62500) / 5000 : ~~(0.1 * Math.sqrt(xp))
        )}{' '}
        Level{xp === 1 ? '' : 's'} Earned
      </h3>
    </div>
  );
};

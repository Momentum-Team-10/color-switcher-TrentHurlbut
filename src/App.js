import React, { useState } from 'react';
import './App.css';
import ColorChangeButton from './ColorChangeButton';

/* eslint-disable */
const App = function () {
  const [color, setColor] = useState('');
  return (
    <div className={`react-root ${color}`}>
      <div className="centered">
        <h1>Color Picker</h1>
        <ColorChangeButton color="red" setColor={setColor} />
        <ColorChangeButton color="blue" setColor={setColor} />
        <ColorChangeButton color="yellow" setColor={setColor} />
      </div>
    </div>
  );
};
/* eslint-disable */

export default App;

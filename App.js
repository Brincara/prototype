// Main app with Test and Game order
import React from 'react';
import TestScreen from './TestScreen';
import GameScreen from './GameScreen';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome />
      <TestScreen />
      <GameScreen />
    </div>
  );
}

export default App;
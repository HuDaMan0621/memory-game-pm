import React from 'react';
import MemoryCard from './Component/MemoryCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h4>Match Cards to win</h4>
      </header>
      <div className="MemoryCard">
        <h1>Cards</h1>
      </div>
    </div>
  );
}

export default App;

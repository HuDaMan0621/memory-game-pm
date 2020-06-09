import React from 'react';
import MemoryCard from './component/MemoryCard.jsx';
import Logo from '../src/dg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h4>Match Cards to win</h4>
      </header>
      <div class="grid-container">
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
        <div className="MemoryCard"><img src={Logo} className="Logo" alt="bg" /></div>
      </div>

    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimerContainer from './components/TimerContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TimerContainer  />
      </header>
    </div>
  );
}

export default App;

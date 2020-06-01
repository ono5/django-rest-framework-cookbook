import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppContext from './contexts/AppContext';
import B from './components/B'

function App() {
  return (
    <AppContext.Provider value={"value from app.js"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <B />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;

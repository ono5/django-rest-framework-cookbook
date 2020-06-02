import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppContext from './contexts/AppContext';
import B from './components/B'
import BasicReducer from './components/BasicReducer';

function App() {
  return (
    <AppContext.Provider value={"value from app.js"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <BasicReducer /> 
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;

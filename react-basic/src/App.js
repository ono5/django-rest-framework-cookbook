import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import AppContext from './contexts/AppContext';
import CompB from './components/CompB';

const initialState = 0
const reducer = (currentState, action) => {
    switch(action) {
        case 'add_1':
            return currentState + 1
        case 'multiple_3':
            return currentState * 3
        case 'reset':
            return initialState
        default:
            return currentState

    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Count {count}
          <CompB />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;

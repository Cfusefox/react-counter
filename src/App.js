import React from 'react';
import './App.css';
import CounterGroup from './components/CounterGroup/index'
import store from './Redux_Test/store'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup/>
      </header>
    </div>
  );
}

export default App;

/* value = { store.getState() }
        onIncrement = { () => store.dispatch({ type: 'ADD' }) }
        onDecrement = { () => store.dispatch({ type: 'REDUCE' }) }
        onEmpty = { () => store.dispatch({ type: 'EMPTY' }) } */
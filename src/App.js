import React from 'react';
import './App.css';
import CounterGroup from './components/CounterGroup/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup count={10}/>
      </header>
    </div>
  );
}

export default App;

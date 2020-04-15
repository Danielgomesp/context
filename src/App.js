import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Mirror from "./components/Mirror";
import { CounterProvider } from "./context/Counter";


function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Counter />
        <Mirror />
      </div>
    </CounterProvider>
  );
}

export default App;

import React, { createContext, useState, useContext } from 'react';

const CountContext = createContext()

export function CounterProvider({ children }) {
  const [seconds, setSeconds] = useState(0)

  return (
    <CountContext.Provider value={{ seconds, setSeconds }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext)
  const { seconds, setSeconds } = context

  return { seconds, setSeconds }
}

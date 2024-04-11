import React from 'react';
import { useCounter } from '../context/CounterContext';

function CounterDisplayWithContext() {
  const { count } = useCounter();
  return <h2>Count: {count}</h2>;
}

export default CounterDisplayWithContext;
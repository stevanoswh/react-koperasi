import React from 'react';
import CounterDisplayWithContext from '../components/CounterDisplayWithContext';
import { CounterProvider } from '../context/CounterContext';
import CounterControls from '../components/ControlCounterWithContext';


function CounterWithContext() {
  return (
    <CounterProvider >
      <div className="mar-top">
        <h1>Simple Counter App with Context</h1>
        <CounterDisplayWithContext />
        <CounterControls />
      </div>
    </CounterProvider>
  );
}

export default CounterWithContext;
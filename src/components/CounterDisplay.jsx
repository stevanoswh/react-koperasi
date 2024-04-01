import React from 'react';
import withClickCounter from '../hoc/withClickCOunter';
import withHoverCounter from '../hoc/withHoverCounter';


const CounterDisplay = ({ clickCount, hoverCount }) => {
  return (
    <div>
      <div>Click Count: {clickCount}</div>
      <div>Hover Count: {hoverCount}</div>
    </div>
  );
};

export default withHoverCounter(withClickCounter(CounterDisplay));
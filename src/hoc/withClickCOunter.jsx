import React, { useState } from 'react';

const withClickCounter = WrappedComponent => {
  return props => {
    const [clickCount, setClickCount] = useState(0);

    const handleIncrementClick = () => {
      setClickCount(clickCount + 1);
    };

    return (
      <div onClick={handleIncrementClick}>
        <WrappedComponent clickCount={clickCount} {...props} />
      </div>
    );
  };
};

export default withClickCounter;
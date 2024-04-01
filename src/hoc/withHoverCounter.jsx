import React, { useState } from 'react';

const withHoverCounter = WrappedComponent => {
  return props => {
    const [hoverCount, setHoverCount] = useState(0);

    const handleIncrementHover = () => {
      setHoverCount(hoverCount + 1);
    };

    return (
      <div onMouseOver={handleIncrementHover}>
        <WrappedComponent hoverCount={hoverCount} {...props} />
      </div>
    );
  };
};

export default withHoverCounter;
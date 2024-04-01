import React from 'react';

const withExtraInfo = (WrappedComponent) => {
  const WithExtraInfo = (props) => {
    return <WrappedComponent extraInfo="Informasi penting" {...props} />;
  };
  return WithExtraInfo;
};

export default withExtraInfo;

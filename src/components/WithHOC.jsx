import React from 'react';
import withExtraInfo from '../hoc/withExtraInfo';

const WithHOC = ({ extraInfo }) => {
  return <div>{extraInfo}</div>;
};

export default withExtraInfo(WithHOC);

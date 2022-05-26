import React from 'react';
import MutateData from './MutateData';
import NotMutateData from './NotMutateData';

const Immutable = () => {
  return (
    <div>
      <h1>Immutable Example</h1>
      <MutateData />
      <NotMutateData />
    </div>
  );
};

export default Immutable;

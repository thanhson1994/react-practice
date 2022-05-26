import React, { useState } from 'react';
import PureComponent from './PureComponent';

const NotMutateData = () => {
  const [listItem, seListItem] = useState(['Marklar']);
  const handleSetListItem = () => {
    const newItem = [...listItem, 'Avenger'];
    seListItem(newItem);
  };
  return (
    <div>
      <h3>NotMutateData</h3>
      <button onClick={handleSetListItem}>Add New Item</button>
      <PureComponent listItem={listItem} />
    </div>
  );
};

export default NotMutateData;

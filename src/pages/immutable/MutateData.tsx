import React, { useState } from 'react';
import PureComponent from './PureComponent';

const MutateData = () => {
  const [listItem, seListItem] = useState(['Marklar']);
  console.log('Rerender MutateData', listItem);
  const handleSetListItem = () => {
    const newItem = listItem;
    newItem.push('Strange');
    console.log('newItem', newItem);
    console.log('listItem', listItem);

    seListItem(newItem);
  };
  return (
    <div>
      <h3>MutateData</h3>
      <button onClick={handleSetListItem}>Add New Item</button>
      <PureComponent listItem={listItem} />
    </div>
  );
};

export default MutateData;

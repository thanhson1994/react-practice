import React from 'react';

type Props = {
  listItem: string[];
};

const PureComponent = ({ listItem }: Props) => {
  console.log('rerender');
  return (
    <div>
      PureComponent
      {listItem.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default PureComponent;

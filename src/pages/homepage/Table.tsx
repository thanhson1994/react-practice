import React, { useState } from 'react';

type Props = {
  count: any;
};

const Table = (props: Props) => {
  //   const createRows = (count: any) => {
  //     console.log('render create row');
  //     return count + 1;
  //   };
  const [rows, setRows] = useState(props.count);

  console.log('props.count', props.count);

  console.log('rows', rows, setRows);
  return <div>Table {rows}</div>;
};

export default Table;

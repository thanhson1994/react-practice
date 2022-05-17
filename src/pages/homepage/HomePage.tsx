import React, { useState, useCallback } from 'react';
import useCustomHook1 from '../../hooks/useCustomHook1';
import Table from './Table';

function HomePage() {
  const [count, setCount] = useState(0);
  const { hook1, setHook1 } = useCustomHook1();
  const handleChangeInput = (e: any) => {
    setHook1(e.target.value);
  };
  const [lists, setList] = useState<number[]>([2]);
  const handleAddList = () => {
    const newList = [...lists, 1];
    setList(newList);
  };
  console.log('home rerender', lists);
  const emailInput = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  return (
    <div>
      homepage {hook1}
      <Table count={count} />
      <button onClick={() => setCount((c) => c + 1)}>Add count</button>
      <input type="text" onChange={handleChangeInput} />
      <div style={{ height: '100vh' }}></div>
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <div ref={emailInput}>abc</div>
      {lists.map((list) => (
        <> {list} </>
      ))}
      <button onClick={handleAddList}> Add List </button>
    </div>
  );
}

export default HomePage;

import { useState, useEffect } from 'react';

export default function useCustomHook2() {
  const [hook2, setHook2] = useState('');

  useEffect(() => {
    setHook2('hook2');
    console.log('hook2');
  }, []);
  // ...

  return hook2;
}

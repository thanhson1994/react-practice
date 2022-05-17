import { useState, useEffect } from 'react';

export default function useCustomHook1() {
  const [hook1, setHook1] = useState('something');
  console.log('hook1:', hook1);

  useEffect(() => {
    setHook1('hook1');
    console.log('hook1');
    return () => {
      console.log('clear hook1');
    };
  }, []);
  // ...

  return { hook1, setHook1 };
}

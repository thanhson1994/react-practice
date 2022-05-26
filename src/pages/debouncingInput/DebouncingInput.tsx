import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DebouncingInput = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState<any>([]);
  //   useEffect(() => {
  //     console.log('call API');

  //   }, [text]);
  useEffect(() => {
    const fetchData = async () => {
      const dataRes = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(dataRes.data.filter((_: any, idx: any) => idx < Math.random() * 100));
      console.log(dataRes.data.filter((_: any, idx: any) => idx < 10));
    };

    const timeout = setTimeout(() => fetchData(), 400);
    return () => {
      console.log('clear timeOut');
      clearTimeout(timeout);
    };
  }, [text]);

  const handleChangeInput = (e: any) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>DebouncingInput</h1>
      <p>Let make a API call depending on input change</p>
      <input type="text" value={text} onChange={handleChangeInput} />
      {data.length && data?.map((item: any) => <div key={item.body}>{item.body}</div>)}
    </>
  );
};

export default DebouncingInput;

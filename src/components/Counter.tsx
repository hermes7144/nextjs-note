'use client';

import { useState } from 'react';

export default function Counter() {
  console.log('클라이언트-안녕');

  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>블라블라</button>
    </>
  );
}

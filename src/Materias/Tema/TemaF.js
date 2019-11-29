import React, { useState } from 'react';

function Temaf() {
  const [count, setCount] = useState(0);
  // 1. the piece of state
  // 2. function that updates that piece of state
  return(
  <div>
    <h1>The count is: {count}</h1>
    <button onClick={() => setCount(count + 1)}>INCREMENT</button>
  </div>
  )
  
}

export default Temaf;
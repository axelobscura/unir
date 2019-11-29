import React, { useState } from 'react';
import useToggle from './Hooks/useToggle';

function Temaf() {
  const [count, setCount] = useState(0);
  const [isHappy, toggleisHappy] = useToggle(true);
  const [isHeartBroken, toggleisHeartBroken] = useToggle(false);
  // 1. the piece of state
  // 2. function that updates that piece of state
  return(
  <div>
    <h1>The count is: {count}</h1>
    <button onClick={() => setCount(count + 1)}>INCREMENT</button>
    <h1 onClick={toggleisHappy}>{isHappy ? '😘' : '🤬'}</h1>
    <h1 onClick={toggleisHeartBroken}>{isHeartBroken ? '💓' : '💔'}</h1>
  </div>
  )
  
}

export default Temaf;
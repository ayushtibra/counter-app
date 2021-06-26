import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
  let quantity = 1;
  let max_count = 1000;
  const [initialCount, setCount] = useState(quantity);

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleIncrement = () => {
    max_count > initialCount && setCount((prevCount) => prevCount + 1);
  };

  const handleChange = (e) => {
    let quantity = +e.target.value;
    if (isNaN(quantity)) return;
    setCount(+quantity);
  };

  return (
    <div className='container'>
      <button className='decrement' onClick={handleDecrement}>
        -
      </button>
      <input type='text' value={initialCount} onChange={handleChange} />
      <button className='increment' onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;

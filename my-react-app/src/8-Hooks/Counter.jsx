import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const resetCount = () => {
    setCount(0);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="counter-container">
      <p className="counter-heading">Counter: {count}</p>
      <div className="btn-container">
        <button className="counter-btn" onClick={incrementCount}>Increment</button>
        <button className="counter-btn" onClick={resetCount}>Reset</button>
        <button className="counter-btn" onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
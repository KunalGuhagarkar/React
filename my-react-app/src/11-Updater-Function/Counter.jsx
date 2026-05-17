import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Will still increment by 1
    /*
      Reason:
        Uses the CURRENT state to calculate the NEXT state.
        set function do not trigger an update.
        React batches together state updates for performance reasons.
        NEXT state becomes the CURRENT state after an update.

        setCount(0 + 1);
        setCount(0 + 1);
        setCount(0 + 1);
    */
    // Not Working Example:
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    
    // Solution:
    /*
      Takes the PENDING state to calculate the NEXT state.
      React puts the updater function in a queue (waiting in line)
      During the next render, it will call them in the same order
    */
    // naming Convention can be first letter like 'c' or add prev prefix
    // setCount(prevCount => prevCount + 1); 
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);

  };

  const handleDecrement = () => {
    setCount(c => c - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;

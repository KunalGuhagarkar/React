import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // useEffect(() => {
  //   document.title = `Count ${count}`; // Changes After every re-render
  // });

  // useEffect(() => {
  //   document.title = `my Counter Program`; // Changes only once
  // }, []); // if i dont use '[]' then if re-render everytime the button is clicked.

  // useEffect(() => {
  //   document.title = `Count: ${count}, Color: ${color}`; // changes the color only when the count changes
  // }, [count]); // if [count] variable updated perform the above Code.

  useEffect(() => {
    document.title = `Count: ${count}, Color: ${color}`; 
  }, [count, color]); // count or color changes run the above code 

  function addCount() {
    setCount((c) => c + 1);
  }

  function subCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c == "green" ? "red" : "green"));
  }

  return (
    <>
      <h2 style={{ color: color }}>Count: {count}</h2>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponent;

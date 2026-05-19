import { useState, useEffect, useRef } from "react";

function MyComponent() {
  // let [number, setNumber] = useState(0);

  // const ref = useRef(0);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  // console.log(ref);

  useEffect(() => {
    console.log("COMPONENT RENDERED.");
    console.log(inputRef1);
    console.log(inputRef2);
    console.log(inputRef3);
  });

  function handleClick1() {
    // ref.current = ref.current + 1;
    // ref.current++;
    // console.log(ref.current);
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = 'orange';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = '';
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = 'blue';
    inputRef1.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = '';
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = 'green';
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = '';
  }

  return (
    <>
      <button onClick={handleClick1}>Click Me</button>
      <input ref={inputRef1}/><br />

      <button onClick={handleClick2}>Click Me</button>
      <input ref={inputRef2}/><br />

      <button onClick={handleClick3}>Click Me</button>
      <input ref={inputRef3}/><br />
    </>
  );
}

export default MyComponent;

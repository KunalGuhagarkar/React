function Button() {
  // const handleClick = () => console.log("Clicked..");
  // const handleClick2 = (name) => console.log(`${name} is Clicking`);

  // let count = 0;
  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you clicked Me ${count} times`);
  //   } else {
  //     console.log(`${name} stop clicking me!`);
  //   }
  // };

  const handleClick = (e) => {
    e.target.textContent = "Ouch";
  }

  // return <button onClick={handleClick}>Click Me</button>
  // return <button onClick={() => handleClick2("Kunal")}>Click Me</button>;
  // return <button onClick={() => handleClick("Kunal")}>Counter</button>;

  // return <button onClick={handleClick}>Click Me</button>
  return <button onDoubleClick={handleClick}>Click Me</button>

}

export default Button;

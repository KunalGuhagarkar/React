import { useState, useEffect } from "react";

function MyComponentTwo() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);


  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log("Event Listener Added");

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log("Event Listener Removed")
    }
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  return (
    <>
      <p>Width of Window is: {width}</p>
      <p>Height of Window is: {height}</p>
    </>
  );
}

export default MyComponentTwo;

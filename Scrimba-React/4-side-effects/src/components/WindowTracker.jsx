import { useEffect, useState } from "react";

export default function WindowTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return <h1>Window width: {width}</h1>;
}

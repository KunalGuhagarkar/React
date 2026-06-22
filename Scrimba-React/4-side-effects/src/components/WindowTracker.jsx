import { useEffect, useState } from "react";

export default function WindowTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWindowWidth() {
      console.log("Resized");
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWindowWidth);

    return function () {
      console.log("Cleaning Up");
      window.removeEventListener("resize", watchWindowWidth);
    };
  }, []);

  return <h1>Window width: {width}</h1>;
}

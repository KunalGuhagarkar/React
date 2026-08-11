// import { useEffect, useRef, useState } from "react";

// export default function UseRef() {
//     const [name, setName] = useState("");
//     const prevName = useRef('');

//     useEffect(() => {
//         prevName.current = name;
//     }, [name]);

//     return (
//         <>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <p>My name is {name} and it was {prevName.current}</p>
//         </>
//     );
// }

// Click Counter using Alert
// import { useRef } from "react";

// export default function UseRef() {
//     const counterRef = useRef(0);

//     function handleCounterAlert() {
//         counterRef.current = counterRef.current + 1;
//         alert(`The Count is: ${counterRef.current}`);
//     }

//     return (
//         <>
//             <button onClick={handleCounterAlert}>Click Me</button>
//         </>
//     );
// }

// Stopwatch
// import { useState, useRef } from "react";

// export default function Stopwatch() {
//     const [startTime, setStartTime] = useState(null);
//     const [now, setNow] = useState(null);
//     const intervalRef = useRef(null);

//     function handleStart() {
//         setStartTime(Date.now());
//         setNow(Date.now());

//         clearInterval(intervalRef.current);
//         intervalRef.current = setInterval(() => {
//             setNow(Date.now());
//         }, 10);
//     }

//     function handleStop() {
//         clearInterval(intervalRef.current);
//     }

//     let secondsPassed = 0;
//     if (startTime != null && now != null) {
//         secondsPassed = (now - startTime) / 1000;
//     }

//     return (
//         <>
//             <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </>
//     );
// }

// Scrolling an Image into View
import { useRef } from "react";

import goku from "../assets/goku.avif";
import naruto from "../assets/naruto.avif";
import luffy from "../assets/luffy.avif";

export default function UseRef() {
    const animeRef = useRef();

    function scrollIntoIndex(index) {
        const listNode = animeRef.current;

        const imageNode = listNode.querySelectorAll("li > img")[index];
        imageNode.scrollIntoView({
            behaviour: "smooth",
            block: "nearest",
            inline: "center",
        });
    }

    return (
        <>
            <button>Goku</button>
            <button>Naruto</button>
            <button>Luffy</button>

            <ul>
                <li>
                    <img src={goku} alt="goku-image" width="500px" />
                </li>
                <li>
                    <img src={naruto} alt="naruto-image" width="500px" />
                </li>
                <li>
                    <img src={luffy} alt="luffy-image" width="500px" />
                </li>
            </ul>
        </>
    );
}

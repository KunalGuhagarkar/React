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
import { useRef } from "react";

export default function UseRef() {
    const timeRef = useRef();

    function handleStartTimer() {
        setInterval(console.log(new Date().getSeconds()), 1000);
    }

    return (
        <>
            <h3>Time passed: timegoeshere...</h3>
            <button onClick={handleStartTimer}>start</button>
            <button>stop</button>
        </>
    );
}

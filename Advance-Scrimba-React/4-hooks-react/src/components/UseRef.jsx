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
import {useRef} from 'react';

export default function UseRef() {
    const counterRef = useRef(0);

    function handleCounterAlert() {
        alert(counterRef.current + 1);
    }

    return (
        <>
            <button onClick={handleCounterAlert}>Click Me</button>
        </>
    );
}
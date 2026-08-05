// Manage Form Input
// import { useState } from "react";

// export default function UseState() {
//     const [name, setName] = useState("");

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };

//     return (
//         <>
//             <input
//                 type="text"
//                 placeholder="Enter Name"
//                 value={name}
//                 onChange={handleNameChange}
//             />

//             <h1>Name is {name}</h1>
//         </>
//     );
// }

// Toggle Visibility
// import { useState } from "react";

// export default function UseState() {
//     const [toggle, setToggle] = useState(false);

//     function toggleNameHandler() {
//         setToggle((prevtoggle) => !prevtoggle);
//     }

//     return (
//         <>
//             <button onClick={toggleNameHandler}>Toggle Info</button>
//             {toggle ? <h1>Important Information</h1> : null}
//         </>
//     );
// }

// Dynamic Styling
// import { useState } from "react";

// export default function UseState() {
//     const [active, setActive] = useState(false);

//     return (
//         <>
//             <button
//                 className={active ? "active" : "inactive"}
//                 onClick={() => setActive(!active)}
//             >
//                 {active ? "Active" : "Inactive"}
//             </button>
//         </>
//     );
// }

// Counters
// import { useState } from "react";

// export default function UseState() {
//     const [counter, setCounter] = useState(0);

//     function handleIncrement() {
//         setCounter((prevCount) => prevCount + 1);
//     }

//     function handleDecrement() {
//         setCounter((prevCount) => prevCount - 1);
//     }

//     return (
//         <>
//             <h1>Counter: {counter}</h1>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handleDecrement}>Decrement</button>
//         </>
//     );
// }

// Updating state based on the previous state
import { useState } from "react";

export default function UseState() {
    const [age, setAge] = useState(23);

    // const handleIncreaseAge = () => {
    //     setAge(prevAge => prevAge + 1);
    //     setAge(prevAge => prevAge + 1);
    //     setAge(prevAge => prevAge + 1);
    // }

    const handleIncreaseAge = () => {
        setAge(age + 1);
        setAge(age + 1);
        setAge(age + 1);
    }

    return (
        <>
            <h1>Age: {age}</h1>
            <button onClick={handleIncreaseAge}>Age + 3</button>
        </>
    );
}

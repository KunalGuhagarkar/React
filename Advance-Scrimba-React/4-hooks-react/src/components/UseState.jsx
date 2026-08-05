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
import { useState } from "react";

export default function UseState() {
    const [toggle, setToggle] = useState(false);

    function toggleNameHandler() {
        toggle && setToggle(!toggle);
    }

    return (
        <>
            <button onClick={toggleNameHandler}>Toggle Info</button>
            {toggle ? <h1>Important Information</h1> : null}
        </>
    );
}

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

import { useState } from "react";

export default function UseState() {
    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={handleNameChange}
            />

            <h1>Name is {name}</h1>
        </>
    );
}

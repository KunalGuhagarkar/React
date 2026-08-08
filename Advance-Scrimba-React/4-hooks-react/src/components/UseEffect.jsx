// import { useState, useEffect } from "react";

// export default function UseEffect() {
//     const [animalName, setAnimalName] = useState("");
//     console.log("render");

//     useEffect(() => {
//         console.log("Animal Changed");
//     }, [animalName]);

//     return (
//         <>
//             <button onClick={() => setAnimalName("Lion")}>Lion</button>
//             <button onClick={() => setAnimalName("Tiger")}>Tiger</button>
//             <button onClick={() => setAnimalName("Panther")}>Panther</button>

//             <h3>{animalName}</h3>
//         </>
//     );
// }

// Example 2
import { useState, useEffect } from "react";

export default function UseEffect() {
    const [serverUrl, setServerUrl] = useState("https://localhost:5432");
    const [chatToggle, setChatToggle] = useState(false);

    function handleUrlChange(e) {
        setServerUrl(e.target.value);
    }

    return (
        <>
            <p>Choose Chat room:</p>
            <select name="chat-room" id="chat-room">
                <option value="General">General</option>
                <option value="Travel">Travel</option>
                <option value="Music">Music</option>
            </select>

            <button onClick={}>Open Chat</button>

            <input type="text" value={serverUrl} onChange={handleUrlChange} />
        </>
    );
}

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
// import { useState, useEffect } from "react";
// import { createConnection } from "./chat";

// export default function UseEffect() {
//     const [serverUrl, setServerUrl] = useState("https://localhost:5432");
//     const [roomId, setRoomId] = useState("General");
//     const [chatToggle, setChatToggle] = useState(false);

//     function handleUrlChange(e) {
//         setServerUrl(e.target.value);
//     }

//     function handleChatToggle() {
//         setChatToggle((prevToggle) => !prevToggle);
//     }

//     function handleRoomSelect(e) {
//         setRoomId(e.target.value);
//     }

//     useEffect(() => {
//         if (!chatToggle) return;

//         const connection = createConnection(serverUrl, roomId);
//         connection.connect();
//         return () => {
//             connection.disconnect();
//         };
//     }, [chatToggle, roomId, serverUrl]);

//     return (
//         <>
//             <label htmlFor="chat-room">Choose Chat room:</label>
//             <select name="chat-room" id="chat-room" onChange={handleRoomSelect}>
//                 <option value="General">General</option>
//                 <option value="Travel">Travel</option>
//                 <option value="Music">Music</option>
//             </select>

//             <button onClick={handleChatToggle}>
//                 {chatToggle ? "Close Chat" : "Open Chat"}
//             </button>

//             <br />
//             {chatToggle && (
//                 <input
//                     type="text"
//                     value={serverUrl}
//                     onChange={handleUrlChange}
//                 />
//             )}
//         </>
//     );
// }

// Listening to global browser event
// import { useEffect, useState } from "react";

// export default function UseEffect() {
//     const [position, setPosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         function handleMove(e) {
//             setPosition({ x: e.clientX, y: e.clientY });
//         }

//         window.addEventListener("pointermove", handleMove);

//         return () => {
//             window.removeEventListener("pointermove", handleMove);
//         };
//     });

//     return (
//         <div
//             style={{
//                 position: "absolute",
//                 backgroundColor: "pink",
//                 borderRadius: "50%",
//                 opacity: 0.6,
//                 transform: `translate(${position.x}px, ${position.y}px)`,
//                 pointerEvents: "none",
//                 left: -20,
//                 top: -20,
//                 width: 40,
//                 height: 40,
//             }}
//         ></div>
//     );
// }

// Triggering Animation
import { useEffect, useRef } from "react";
import { FadeInAnimation } from "./animation";

function Welcome() {
    const ref = useRef(null);

    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(1000);
        return () => {
            animation.stop();
        };
    }, []);

    return (
        <h1
            ref={ref}
            style={{
                opacity: 0,
                color: "white",
                padding: 50,
                textAlign: "center",
                fontSize: 50,
                backgroundImage:
                    "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            }}
        >
            Welcome
        </h1>
    );
}

export default function UseEffect() {
    return <></>;
}

import { useRef, useState } from "react";

export default function UseRef() {
    const [name, setName] = useState("");

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>My name is {name}</p>
        </>
    );
}

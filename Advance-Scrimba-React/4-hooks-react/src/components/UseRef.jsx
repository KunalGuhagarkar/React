import { useEffect, useRef, useState } from "react";

export default function UseRef() {
    const [name, setName] = useState("");
    const inputRef = useRef();

    return (
        <>
            <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>My name is {name}</p>
            <button onClick={() => inputRef.current.focus()}>Focus</button>
        </>
    );
}

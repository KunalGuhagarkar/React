import { useEffect, useRef, useState } from "react";

export default function UseRef() {
    const [name, setName] = useState("");
    const prevName = useRef('');

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>My name is {name} and it was {prevName}</p>
        </>
    );
}

import { useEffect, useRef, useState } from "react";

export default function UseRef() {
    const [name, setName] = useState("");
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>My name is {name}</p>
            <p>Render Count is {renderCount.current}</p>
        </>
    );
}

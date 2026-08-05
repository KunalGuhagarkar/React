import { useState } from "react";

export default function UseState() {
    const [name, setName] = useState("");

    return (
        <>
            <input type="text" placeholder="Enter Name" value={name} />
        </>
    );
}

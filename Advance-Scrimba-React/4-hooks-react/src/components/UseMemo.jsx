import { useMemo, useState } from "react";

function UseMemo() {
    const [isDark, setIsDark] = useState(false);
    const [number, setNumber] = useState(0);

    return (
        <>
            <input type="text" value={number} />
            <button>Change Theme</button>
            <p>{slowFunction(number)}</p>
        </>
    );
}

function slowFunction(num) {
    for (let i = 0; i < 100000000000; i++) {}
    return num * 2;
}

export default UseMemo;

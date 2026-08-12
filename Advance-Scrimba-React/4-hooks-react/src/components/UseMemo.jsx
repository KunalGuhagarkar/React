import { useMemo, useState } from "react";

function UseMemo() {
    const [isDark, setIsDark] = useState(false);
    const [number, setNumber] = useState(0);

    const doubleNum = slowFunction(number);

    function handleNumberChange(e) {
        setNumber(e.target.value);
    }

    return (
        <>
            <input type="text" value={number} onChange={handleNumberChange} />
            <button onClick={handleThemeChange}>Change Theme</button>
            <p>{doubleNum}</p>
        </>
    );
}

function slowFunction(num) {
    console.log('Slow Function started');
    for (let i = 0; i <= 100000000000; i++) {}
    return num * 2;
}

export default UseMemo;

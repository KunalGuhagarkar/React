import { useMemo, useState } from "react";

function UseMemo() {
    const [isDark, setIsDark] = useState(false);
    const [number, setNumber] = useState(0);

    const doubleNum = slowFunction(number);

    function handleNumberChange(e) {
        setNumber(e.target.value);
    }

    function handleThemeChange() {
        setIsDark((prevTheme) => !prevTheme);
    }

    const style = {
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
    };

    return (
        <>
            <input type="text" value={number} onChange={handleNumberChange} />
            <button onClick={handleThemeChange}>Change Theme</button>
            <p style={style}>{doubleNum}</p>
        </>
    );
}

function slowFunction(num) {
    console.log("Slow Function started");
    for (let i = 0; i <= 1000000; i++) {}
    return num * 2;
}

export default UseMemo;

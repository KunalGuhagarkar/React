import { useEffect, useState, useCallback } from "react";

function List({ numList }) {
    const [numberList, setNumberList] = useState([]);

    useEffect(() => {
        setNumberList(numList());
        console.log("Updating Items");
    }, [numList]);

    return numberList.map((num) => <p key={num}>{num}</p>);
}

export default function UseCallback() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    // For useMemo()
    // const numberList = useMemo(() => [number + 1, number + 2, number + 3], [number]);

    const numberList = useCallback(
        () => [number, number + 1, number + 2],
        [number],
    );

    const style = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };

    function toggleTheme() {
        setDark((prevTheme) => !prevTheme);
    }

    function handleNumberChange(e) {
        setNumber(parseInt(e.target.value));
    }

    return (
        <div style={style}>
            <input type="number" value={number} onChange={handleNumberChange} />
            <button onClick={toggleTheme}>Toggle Theme</button>
            <List numList={numberList} />
        </div>
    );
}

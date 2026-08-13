import { useEffect, useState } from "react";

function List({ numList }) {
    const [numberList, setNumberList] = useState([]);

    useEffect(() => {
        setNumberList(numList());
        console.log("Updating Items");
    }, [numList]);

    return numberList.map((num, index) => <p key={index}>{num}</p>);
}

export default function UseCallback() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const numberList = () => [number + 1, number + 2, number + 3];

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
            <input type="text" value={number} onChange={handleNumberChange} />
            <button onClick={toggleTheme}>Toggle Theme</button>
            <List numList={numberList} />
        </div>
    );
}

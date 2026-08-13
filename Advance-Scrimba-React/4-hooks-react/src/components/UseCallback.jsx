import { useState } from "react";


export default function UseCallback() {

    const [number, setNumber] = useState();
    const [dark, setDark] = useState(false);

    const style = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    function toggleTheme() {
        setDark(prevTheme => !prevTheme);
    }

    function handleNumberChange(e) {
        setNumber(e.target.value);
    }

    return (
        <div style={style}>
            <input type="number" value={number} onChange={handleNumberChange} />
        </div>
    );
}
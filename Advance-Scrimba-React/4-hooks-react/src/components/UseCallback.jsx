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

    return (
        <div>

        </div>
    );
}
import { useContext, createContext, useState } from "react";

const ThemeContext = createContext(null);

export default function UseContext() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext value={theme}>

        </ThemeContext>
    )
}

function Form() {
    return (
        <div>
            <input type="text" placeholder="Enter Name:" />
            <button>Login</button>
        </div>
    )
}
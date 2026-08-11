import { useContext, createContext, useState } from "react";

const ThemeContext = createContext(null);

export default function UseContext() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prevTheme => {
            prevTheme === 'light' ? 'dark' : 'light'
        })
    }

    return (
        <ThemeContext value={theme, toggleTheme}>
            <Form />
        </ThemeContext>
    );
}

function Form() {
    return (
        <Panel>
            <input type="text" placeholder="Enter Name:" />
            <button>Login</button>
        </Panel>
    );
}

function Panel({children}) {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div>
            {children}
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

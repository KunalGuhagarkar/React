import { useContext, createContext, useState } from "react";

const ThemeContext = createContext(null);

export default function UseContext() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext value={theme}>
            <Form />
            <button
                onClick={() =>
                    setTheme((prevTheme) => {
                        prevTheme === "light" ? "dark" : "light";
                    })
                }
            >
                Toggle Theme
            </button>
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
    return (
        <div>
            {children}
        </div>
    );
}

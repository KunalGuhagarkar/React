// import { useContext, createContext, useState } from "react";

// const ThemeContext = createContext(null);

// export default function UseContext() {
//     const [theme, setTheme] = useState("light");

//     const toggleTheme = () => {
//         setTheme((prevTheme) => {
//             return prevTheme === "light" ? "dark" : "light";
//         });
//     };

//     return (
//         <ThemeContext value={{ theme, toggleTheme }}>
//             <Form />
//         </ThemeContext>
//     );
// }

// function Form() {
//     return (
//         <Panel>
//             <input type="text" placeholder="Enter Name:" />
//             <br />
//             <br />
//             <button>Login</button>
//         </Panel>
//     );
// }

// function Panel({ children }) {
//     const { theme, toggleTheme } = useContext(ThemeContext);

//     return (
//         <div
//             style={{
//                 backgroundColor: theme === "dark" ? "black" : "white",
//                 padding: "50px",
//                 textAlign: "center",
//             }}
//         >
//             {children}
//             <br />
//             <br />
//             <button onClick={toggleTheme}>{theme} Theme</button>
//         </div>
//     );
// }

// Example 2 Login
import { useContext, createContext, useState } from "react";

const LoginContext = createContext();

export default function UseContext() {
    return (
        <LoginContext value={{ name: "Kunal" }}>
            <Form />
        </LoginContext>
    );
}

function Form() {
    const { name } = useContext(LoginContext);

    const [loginStatus, setLoginStatus] = useState(false);

    function handleLogin() {
        
    }

    return (
        <Panel>
            <input type="text" placeholder="Enter Name:" />
            <button onClick={handleLogin}>Login as {name}</button>
        </Panel>
    );
}

function Panel({ children }) {
    return <div>{children}</div>;
}

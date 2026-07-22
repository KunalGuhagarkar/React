import ReactDOM from "react-dom/client";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    redirect,
} from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout";
import AuthRequired from "./components/AuthRequired";
import Login from "./components/Login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route
                index
                element={<h1>Home page</h1>}
                loader={async () => {
                    return null;
                }}
            />

            <Route
                path="protected"
                element={<h1>Super secret info here</h1>}
                loader={async () => {
                    const rand = Math.random() * 2;
                    setTimeout(() => {
                        console.log("TimeOut protected");
                    }, rand);
                    return null;
                }}
            >
                <Route
                    path="nested"
                    element={<h1>Nested Protected Route</h1>}
                    loader={async () => {
                        const rand = Math.random() * 2;
                        setTimeout(() => {
                            console.log("TimeOut nested protected");
                        }, rand);
                        return null;
                    }}
                />
            </Route>

            <Route path="/login" element={<Login />} />
        </Route>,
    ),
);

function App() {
    return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

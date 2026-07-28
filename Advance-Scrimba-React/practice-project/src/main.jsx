// import ReactDOM from "react-dom/client";
// import {
//     RouterProvider,
//     createBrowserRouter,
//     createRoutesFromElements,
//     Route,
// } from "react-router-dom";
// import "./index.css";

// import Layout from "./components/Layout";
// import AuthRequired from "./components/AuthRequired";
// import Login, { loginLoader } from "./components/Login";

// import { requireAuth } from "./utils";

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<Layout />}>
//             <Route
//                 index
//                 element={<h1>Home page</h1>}
//                 loader={async () => {
//                     return null;
//                 }}
//             />

//             <Route
//                 path="protected"
//                 element={<h1>Super secret info here</h1>}
//                 loader={async () => {
//                     await requireAuth();
//                 }}
//             >
//                 <Route
//                     path="nested"
//                     element={<h1>Nested Protected Route</h1>}
//                     loader={async () => {
//                         return null;
//                     }}
//                 />
//             </Route>

//             <Route path="/login" element={<Login />} loader={loginLoader} />
//         </Route>,
//     ),
// );

// function App() {
//     return <RouterProvider router={router} />;
// }

// import ReactDOM from "react-dom/client";
// import "./index.css";

// import Form from "./components/Form";

// function App() {
//     return (
//         <>
//             <Form />
//         </>
//     );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

import React from "react";
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
import Login, { action as loginAction } from "./components/Login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<h1>Home page</h1>} />
            <Route
                path="protected"
                element={<h1>Super secret info here</h1>}
                loader={async () => {
                    const isLoggedIn = false;
                    if (!isLoggedIn) {
                        throw redirect("/login");
                    }
                    return null;
                }}
            />
            <Route path="login" element={<Login />} action={loginAction} />
        </Route>,
    ),
);

function App() {
    return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

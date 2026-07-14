import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./server";

createRoot(document.getElementById("root")).render(<App />);

// import React from "react";
// import "./App.css";
// import ReactDOM from "react-dom/client";
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     NavLink,
//     Outlet,
// } from "react-router-dom";

// function Layout() {
//     const activeStyle = {
//         fontWeight: "bold",
//         textDecoration: "underline",
//         color: "red",
//     };

//     return (
//         <div>
//             <h3>Welcome to my page!</h3>
//             <nav>
//                 <NavLink
//                     to="/"
//                     style={({ isActive }) => (isActive ? activeStyle : null)}
//                 >
//                     Home
//                 </NavLink>
//                 <NavLink
//                     to="/about"
//                     style={({ isActive }) => (isActive ? activeStyle : null)}
//                 >
//                     About
//                 </NavLink>
//                 <NavLink
//                     to="/contact"
//                     style={({ isActive }) => (isActive ? activeStyle : null)}
//                 >
//                     Contact
//                 </NavLink>
//             </nav>
//             <Outlet />
//         </div>
//     );
// }

// function HomePage() {
//     return (
//         <main>
//             <h2>Home</h2>
//         </main>
//     );
// }

// function AboutPage() {
//     return (
//         <main>
//             <h2>About Me</h2>
//         </main>
//     );
// }

// function ContactPage() {
//     return (
//         <main>
//             <h2>Contact</h2>
//         </main>
//     );
// }

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<HomePage />} />
//                     <Route path="about" element={<AboutPage />} />
//                     <Route path="contact" element={<ContactPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Link,
//     useSearchParams,
// } from "react-router-dom";

// const swCharacters = [
//     { name: "Luke Skywalker", type: "Jedi" },
//     { name: "Darth Vader", type: "Sith" },
//     { name: "Emperor Palpatine", type: "Sith" },
//     { name: "Yoda", type: "Jedi" },
// ];

// function HomePage() {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const typeFilter = searchParams.get("type");

//     const filterDisplayCharacters = typeFilter
//         ? swCharacters.filter((char) => typeFilter === char.type.toLowerCase())
//         : swCharacters;

//     const charEls = filterDisplayCharacters.map((char) => (
//         <div key={char.name}>
//             <h3
//                 style={{
//                     color: char.type.toLowerCase() === "jedi" ? "blue" : "red",
//                 }}
//             >
//                 Name: {char.name}
//             </h3>
//             <p>Type: {char.type}</p>
//             <hr />
//         </div>
//     ));

//     return (
//         <main>
//             <h2>Home</h2>
//             {charEls}
//         </main>
//     );
// }

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/characters" element={<HomePage />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// createRoot(document.getElementById("root")).render(<App />);

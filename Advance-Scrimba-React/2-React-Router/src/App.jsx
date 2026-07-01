import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
import VanDetail from "./components/VanDetail";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">
                    <h1>#VANLIFE</h1>
                </Link>

                <div className="links-container">
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id/:type" element={<VanDetail />} />
            </Routes>
            <footer>
                <p>@2022 #VANLIFE</p>
            </footer>
        </BrowserRouter>
    );
}

export default App;

import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <h1>#VANLIFE</h1>
                </Link>

                <div className="links-container">
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;

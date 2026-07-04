import { Link, NavLink } from "react-router-dom";

function Header() {
    const activeLink = {
        fontWeight: "bold",
        TextDecoration: "underline",
        color: "#161616",
    };

    return (
        <header>
            <nav>
                <Link to="/">
                    <h1>#VANLIFE</h1>
                </Link>

                <div className="links-container">
                    <NavLink
                        to="/about"
                        style={({ isActive }) => (isActive ? activeLink : null)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/host"
                        style={({ isActive }) => (isActive ? activeLink : null)}
                    >
                        Host
                    </NavLink>
                    <NavLink
                        to="/vans"
                        style={({ isActive }) => (isActive ? activeLink : null)}
                    >
                        Vans
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;

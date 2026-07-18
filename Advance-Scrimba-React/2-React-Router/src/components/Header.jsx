import { Link, NavLink } from "react-router-dom";
import imageUrl from "/src/assets/login.svg";

function Header() {
    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
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
                        to="/host"
                        style={({ isActive }) => (isActive ? activeLink : null)}
                    >
                        Host
                    </NavLink>
                    <NavLink
                        to="/about"
                        style={({ isActive }) => (isActive ? activeLink : null)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/vans"
                        style={({ isActive }) => (isActive ? activeLink : null)}
                    >
                        Vans
                    </NavLink>
                    <Link to="/login">
                        <img
                            src={imageUrl}
                            alt="login-icon"
                            width={25}
                        />
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;

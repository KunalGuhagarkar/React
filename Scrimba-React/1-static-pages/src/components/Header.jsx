function Header() {
  return (
    <header className="header-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
        alt="react-logo"
        className="img"
      />
      <nav>
        <ul className="nav-list">
          <li className="list-item">Pricing</li>
          <li className="list-item">About</li>
          <li className="list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

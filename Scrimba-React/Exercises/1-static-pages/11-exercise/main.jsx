/* 
Challenge:
Move the `width` off the JSX and into CSS with a dedicated className on the img element, and change the width to 55px instead 
*/

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
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
/* 
Challenge:
  Using flexbox, line up `li`'s horizontally and put them inline with the React logo.
  NOTE: for practice's sake, don't select any elements, but use classes for all styling. 
*/

function Header() {
  return (
    <header className="header-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
        alt="react-logo"
        width="50px"
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
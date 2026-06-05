/*
Challenge:
  Add a `nav` > `ul` > `li` (x3). The 3 items should say: "Pricing", "About", and "Contact"
*/

function Header() {
  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
        alt="react-logo"
        width="50px"
      />
      <nav>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

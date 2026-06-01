import logo from '../assets/logo.png';

// Adding Header Component's CSS
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}

/*
  Vanilla CSS Advantages and Disadvantages:

    Advantages:
      1. CSS code is decoupled from JSX code.
      2. CSS code is known for you and prefer it
      3. CSS code can be written by another developer who needs only a minimal amount of access to your JSX code

    Disadvantages:
      1. You need to know CSS
      2. CSS code is not scoped to components -> CSS rules may clash across components (e.g., some CSS class name used in different components for different purposes)
*/
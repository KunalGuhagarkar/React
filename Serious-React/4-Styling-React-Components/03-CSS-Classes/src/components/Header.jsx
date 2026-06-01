import logo from "../assets/logo.png";

// Adding Header Component's CSS
import styles from"./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={styles.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}

/*
  CSS Modules:

    Advantages:
      1. CSS code is decoupled from JSX.
      2. You know CSS and prefer it.
      3. 
*/
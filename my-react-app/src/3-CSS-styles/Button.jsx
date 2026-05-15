// import styles from './Button.module.css';

function Button() {
  // Inline
  const styles = {
    backgroundColor: "hsl(151, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  // return <button className={styles.button}>Click Me</button>
  return <button style={styles}>Click Me</button>;
}

export default Button;

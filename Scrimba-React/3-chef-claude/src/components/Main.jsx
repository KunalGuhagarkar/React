export default function Main() {
  return (
    <div className="main-container">
      <div className="form-container">
        <form action="">
          <input type="text" placeholder="e.g. oregano" />
          <button>+ Add ingredient</button>
        </form>
        <ul>
          {/* Render the list here... */}
        </ul>
      </div>
    </div>
  );
}

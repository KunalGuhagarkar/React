export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map((item) => {
    return <li>{item}</li>;
  });

  return (
    <div className="main-container">
      <div className="form-container">
        <form action="">
          <input type="text" placeholder="e.g. oregano" />
          <button>+ Add ingredient</button>
        </form>
      </div>
      <ul>{ingredientsListItems}</ul>
    </div>
  );
}

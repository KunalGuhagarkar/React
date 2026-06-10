export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map((item) => {
    return <li key={item}>{item}</li>;
  });

  function handleSubmit() {
    console.log("Form Submitted!");
  }

  return (
    <div className="main-container">
      <div className="form-container">
        <form action="">
          <input type="text" placeholder="e.g. oregano" />
          <button onSubmit={handleSubmit}>+ Add ingredient</button>
        </form>
      </div>
      <ul>{ingredientsListItems}</ul>
    </div>
  );
}

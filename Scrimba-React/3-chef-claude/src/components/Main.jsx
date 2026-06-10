export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map((item) => {
    return <li key={item}>{item}</li>;
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted!");
    console.log(e.target);
  }

  return (
    <div className="main-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="e.g. oregano" name="ingredient" />
          <button>+ Add ingredient</button>
        </form>
      </div>
      <ul>{ingredientsListItems}</ul>
    </div>
  );
}

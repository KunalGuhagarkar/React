import { useState } from "react";

export default function Main() {
  const [ingredientsList, setIngredientsList] = useState([]);

  const ingredientsListItems = ingredientsList.map((item) => {
    return <li key={item}>{item}</li>;
  });

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredientsList((prevIngredientList) => [
      ...prevIngredientList,
      newIngredient,
    ]);
  }

  return (
    <div className="main-container">
      <div className="form-container">
        <form action={handleSubmit}>
          <input type="text" placeholder="e.g. oregano" name="ingredient" />
          <button>+ Add ingredient</button>
        </form>
      </div>
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsListItems}
        </ul>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
      </section>
    </div>
  );
}

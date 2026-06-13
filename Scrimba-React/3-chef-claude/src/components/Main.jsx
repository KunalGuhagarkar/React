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
      <ul>{ingredientsListItems}</ul>
    </div>
  );
}

import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredientsList, setIngredientsList] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [recipeShown, setRecipeShown] = useState(false);

  function toggleRecipe() {
    setRecipeShown((prev) => !prev);
  }

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

      {ingredientsList.length > 0 && (
        <IngredientsList
          ingredientsList={ingredientsList}
          ingredientsListItems={ingredientsListItems}
          toggleRecipe={toggleRecipe}
        />
      )}

      {recipeShown && <ClaudeRecipe />}
    </div>
  );
}

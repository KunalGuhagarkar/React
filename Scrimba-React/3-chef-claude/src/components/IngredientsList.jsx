function IngredientsList({ ingredientsList, toggleRecipe }) {
  const ingredientsListItems = ingredientsList.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {ingredientsList.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={toggleRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;

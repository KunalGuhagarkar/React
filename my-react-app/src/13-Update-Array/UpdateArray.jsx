import { useState } from "react";

function UpdateArray() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const foodInput = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = ""; // clears the input field
    setFoods((f) => [...f, foodInput]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i != index));
  }

  return (
    <>
      <ul>
        {foods.map((food, index) => (
          <li onClick={() => handleRemoveFood(index)} key={index}>{food}</li>
        ))}
      </ul>

      <input type="text" id="foodInput" />
      <button onClick={handleAddFood}>Add Food</button>
    </>
  );
}

export default UpdateArray;

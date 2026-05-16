function List({
  // Default Props
  fruits = [{ id: -1, name: "Oink", calorie: 6767 }], 
  category = "Category",
}) {
  // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

  // const fruits = [
  //   { id: 1, name: "Apple", calorie: 95 },
  //   { id: 2, name: "Orange", calorie: 45 },
  //   { id: 3, name: "banana", calorie: 105 },
  //   { id: 4, name: "coconut", calorie: 159 },
  //   { id: 5, name: "pineapple", calorie: 37 },
  // ];

  // fruits.sort();
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  // fruits.sort((a, b) => a.calorie - b.calorie); // NUMERIC
  // fruits.sort((a,b) => b.calorie - a.calorie); // REVERSE NUMERIC

  // high calorie fruits
  // const highfilterCal = fruits.filter((fruit) => fruit.calorie > 100);

  // const listItems = highfilterCal.map((fruit) => {
  //   return (
  //     <li key={fruit.id}>
  //       Fruit:{fruit.name} Calories: {fruit.calorie}
  //     </li>
  //   );
  // });

  // low calorie fruits
  // const lowfilterCal = fruits.filter(fruit => fruit.calorie < 100);

  // const listItems = lowfilterCal.map((fruit) => {
  //   return (
  //     <li key={fruit.id}>
  //       Fruit:{fruit.name} Calories: {fruit.calorie}
  //     </li>
  //   );
  // });

  // const listItems = fruits.map((fruit) => {
  //   return (
  //     <li key={fruit.id}>
  //       Fruit:{fruit.name} Calories: {fruit.calorie}
  //     </li>
  //   );
  // });

  // Using props
  // const fruits = props.fruits;

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : {fruit.calorie}
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
  // return fruits; // Output -> appleorangebananacoconutpineapple
}

export default List;

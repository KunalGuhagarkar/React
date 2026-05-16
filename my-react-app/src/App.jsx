// // 1. React-Component
// import Header from "./1-React-Components/Header";
// import Food from "./1-React-Components/Food";
// import Footer from "./1-React-Components/Footer";

// // 2. Card
// import Card from "./2-Card/Card";

// // 3. Button
// import Button from "./3-CSS-styles/Button";

// // 4. Props (Student Component)
// import Student from "./4-Props/Student";

// 5. Conditional Rendering
// import UserGreeting from "./5-Conditonal-Rendering/UserGreeting";

// 6. Render List
import List from "./6-Render-List/List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calorie: 95 },
    { id: 2, name: "Orange", calorie: 45 },
    { id: 3, name: "banana", calorie: 105 },
    { id: 4, name: "coconut", calorie: 159 },
    { id: 5, name: "pineapple", calorie: 37 },
  ];

  const vegetables = [
    { id: 6, name: "Onion", calorie: 45 },
    { id: 7, name: "Tomato", calorie: 67 },
    { id: 8, name: "Okra", calorie: 23 },
    { id: 9, name: "Eggplant", calorie: 145 },
    { id: 10, name: "Potato", calorie: 200 },
  ];

  const grocery = [
    // { id: 11, name: "Kurkure", calorie: 34 },
    // { id: 12, name: "Waffers", calorie: 23 },
    // { id: 13, name: "Chocolate", calorie: 233 },
    // { id: 14, name: "Socks", calorie: 56 },
    // { id: 15, name: "Bags", calorie: 167 },
  ];
  return (
    <>
      {/* 1. React Components
      <Header />
      <Food />
      <Food />
      <Food />
      <Footer />  */}

      {/* 2. Card Component
      <Card />
      <Card />
      <Card />  */}

      {/* 3. add CSS styles
        How to Style React Components with CSS
          1. External
          2. Modules
          3. Inline
      <Button /> */}

      {/* 4. Props
          read-only properties that are shared between commponents. A parent component can send data to a child component.
          <Component key=value /> 

          propTypes = a mechanism that ensures that the passed value is of the correct datatype.
          age : PropTypes.number
      */}
      {/* <Student name="Kunal" age={22} isStudent={true} />
      <Student name="Spongebob" age="51" isStudent={false} /> */}

      {/* 5. Conditional Rendering
            allows you to control what gets rendered in your application based on certain conditions (show, hide, or change components)
      */}
      {/* <UserGreeting isLoggedIn={true} username="Kunal" /> */}

      {/* 6. Render List */}

      {fruits.length > 0 && <List fruits={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List fruits={vegetables} category="Vegetables" />
      )}
      {grocery.length > 0 && <List fruits={grocery} category="Grocery" />}
      <List />
    </>
  );
}

export default App;

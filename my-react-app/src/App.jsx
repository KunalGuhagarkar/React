// ======================================================
// 1. React Components
// ======================================================

// import Header from "./1-React-Components/Header";
// import Food from "./1-React-Components/Food";
// import Footer from "./1-React-Components/Footer";

// ======================================================
// 2. Card Component
// ======================================================

// import Card from "./2-Card/Card";

// ======================================================
// 3. CSS Styles
// ======================================================

// import Button from "./3-CSS-styles/Button";

// ======================================================
// 4. Props
// ======================================================

// import Student from "./4-Props/Student";

// ======================================================
// 5. Conditional Rendering
// ======================================================

// import UserGreeting from "./5-Conditonal-Rendering/UserGreeting";

// ======================================================
// 6. Render List
// ======================================================

// import List from "./6-Render-List/List";

// ======================================================
// 7. Click Events
// ======================================================

// import Button from "./7-Click-Events/Button";
// import ProfilePicture from "./7-Click-Events/ProfilePicture";

// ======================================================
// 8. React hook useState()
// ======================================================

// import MyComponent from "./8-Hooks/MyComponent";
// import Counter from "./8-Hooks/Counter";

// ======================================================
// 9. onChange Event Handler
// ======================================================

// import MyComponent from "./9-onChange/MyComponent";

function App() {
  // ======================================================
  // 6. Render List Data
  // ======================================================

  // const fruits = [
  //   { id: 1, name: "Apple", calorie: 95 },
  //   { id: 2, name: "Orange", calorie: 45 },
  //   { id: 3, name: "banana", calorie: 105 },
  //   { id: 4, name: "coconut", calorie: 159 },
  //   { id: 5, name: "pineapple", calorie: 37 },
  // ];

  // const vegetables = [
  //   { id: 6, name: "Onion", calorie: 45 },
  //   { id: 7, name: "Tomato", calorie: 67 },
  //   { id: 8, name: "Okra", calorie: 23 },
  //   { id: 9, name: "Eggplant", calorie: 145 },
  //   { id: 10, name: "Potato", calorie: 200 },
  // ];

  // const grocery = [
  //   // { id: 11, name: "Kurkure", calorie: 34 },
  //   // { id: 12, name: "Waffers", calorie: 23 },
  //   // { id: 13, name: "Chocolate", calorie: 233 },
  //   // { id: 14, name: "Socks", calorie: 56 },
  //   // { id: 15, name: "Bags", calorie: 167 },
  // ];

  return (
    <>
      {/* ======================================================
          1. React Components
      ====================================================== */}

      {/*
      <Header />
      <Food />
      <Food />
      <Food />
      <Footer />
      */}

      {/* ======================================================
          2. Card Component
      ====================================================== */}

      {/*
      <Card />
      <Card />
      <Card />
      */}

      {/* ======================================================
          3. Add CSS Styles
      ====================================================== */}

      {/*
        How to Style React Components with CSS

        1. External CSS
        2. CSS Modules
        3. Inline CSS
      */}

      {/*
      <Button />
      */}

      {/* ======================================================
          4. Props
      ====================================================== */}

      {/*
        Props:
        Read-only properties shared between components.

        Parent Component
              ↓
        Child Component

        Syntax:
        <Component key=value />

        propTypes:
        Used for datatype checking.

        Example:
        age: PropTypes.number
      */}

      {/*
      <Student name="Kunal" age={22} isStudent={true} />

      <Student
        name="Spongebob"
        age="51"
        isStudent={false}
      />
      */}

      {/* ======================================================
          5. Conditional Rendering
      ====================================================== */}

      {/*
        Conditional Rendering:
        Allows you to control what gets rendered
        based on conditions.

        Examples:
        - show components
        - hide components
        - switch UI
      */}

      {/*
      <UserGreeting
        isLoggedIn={true}
        username="Kunal"
      />
      */}

      {/* ======================================================
          6. Render List
      ====================================================== */}

      {/*
      {fruits.length > 0 && (
        <List
          fruits={fruits}
          category="Fruits"
        />
      )}

      {vegetables.length > 0 && (
        <List
          fruits={vegetables}
          category="Vegetables"
        />
      )}

      {grocery.length > 0 && (
        <List
          fruits={grocery}
          category="Grocery"
        />
      )}

      <List />
      */}

      {/* ======================================================
          7. Click Events
      ====================================================== */}

      {/*
        Click Event = An interaction when a user clicks on a specific element
        We can respond to clicks by passing a callback to a onClick event handler.
      */}

      {/* <Button /> */}
      {/* <ProfilePicture /> */}

      {/* ======================================================
          8. React Hook useState
      ====================================================== */}

      {/*
        React Hook
          Special function that allows functional components to use React features without writing class components
          
          useState() = A React hook that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM. 
          [name, setName]
      */}

      {/* <MyComponent /> */}
      {/* <Counter /> */}

      {/* ======================================================
          9. onChange Event Handler
      ====================================================== */}

      {/* 
        onChange event handler user primarily with form elements
        Triggers a function everytime the value of the input changes
      */}

      {/* <MyComponent /> */}
    </>
  );
}

export default App;

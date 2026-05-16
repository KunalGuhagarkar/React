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
import UserGreeting from "./5-Conditonal-Rendering/UserGreeting";

function App() {
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
      <UserGreeting isLoggedIn={true} username={0}/>
    
    </>
  );
}

export default App;

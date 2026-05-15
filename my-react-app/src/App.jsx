{
  /* 1. React-Component */
}
import Header from "./1-React-Components/Header";
import Food from "./1-React-Components/Food";
import Footer from "./1-React-Components/Footer";

{
  /* 2. Card */
}
import Card from "./2-Card/Card";

function App() {
  return (
    <>
      {/* 1. React Components */}
      <Header />
      <Food />
      <Food />
      <Food />
      <Footer /> 
     
     {/* 2. Card Component */}
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;

// import { Component } from "react";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   );
// }

// export default App;

// export default class App extends Component {
//   render() {
//     return <h1>{this.props.type} Component</h1>;
//   }
// }

import { Component } from "react";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Greeting />
//     </div>
//   );
// }

export default class App extends Component {
  render() {
    <div>
      <Header username="Kunal" />
      <Greeting />
    </div>;
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    );
  }
}

// function Greeting() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;

//   if (hours < 12) {
//     timeOfDay = "morning";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon";
//   } else {
//     timeOfDay = "night";
//   }
//   return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
// }

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
  }
}

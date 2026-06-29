// import { Component } from "react";
import "./App.css";

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

// import { Component } from "react";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Greeting />
//     </div>
//   );
// }

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header username="Kunal" />
//         <Greeting />
//       </div>
//     );
//   }
// }

// class Header extends Component {
//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}</p>
//       </header>
//     );
//   }
// }

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

// class Greeting extends Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;

//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon";
//     } else {
//       timeOfDay = "night";
//     }
//     return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
//   }
// }

// import React from "react";

// export default class App extends React.Component {
//   // const [goOut, setGoOut] = React.useState("Yes")

//   state = {
//     goOut: "Yes",
//   };

//   toggleGoOut = () => {
//     this.setState((prevState) => {
//       return {
//         goOut: prevState.goOut === "Yes" ? "No" : "Yes",
//       };
//     });
//   };

//   render() {
//     return (
//       <div className="state">
//         <h1 className="state--title">Should I go out tonight?</h1>
//         <div className="state--value" onClick={this.toggleGoOut}>
//           <h1>{this.state.goOut}</h1>
//         </div>
//       </div>
//     );
//   }
// }

// import React from "react";

// export default class App extends React.Component {
//     state = {
//         count: 0,
//     };

//     add = () => {
//         this.setState((prevCount) => {
//             return {
//                 count: prevCount.count + 1,
//             };
//         });
//     };

//     subtract = () => {
//         this.setState((prevCount) => {
//             return {
//                 count: prevCount.count - 1,
//             };
//         });
//     };

//     render() {
//         return (
//             <div className="counter">
//                 <button className="counter--minus" onClick={this.subtract}>
//                     –
//                 </button>
//                 <div className="counter--count">
//                     <h1>{this.state.count}</h1>
//                 </div>
//                 <button className="counter--plus" onClick={this.add}>
//                     +
//                 </button>
//             </div>
//         );
//     }
// }

// import React from "react";

// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             goOut: "Yes",
//         };
//         this.toggleGoOut = this.toggleGoOut.bind(this);
//     }

//     toggleGoOut() {
//         this.setState((prevState) => {
//             return {
//                 goOut: prevState.goOut === "Yes" ? "No" : "Yes",
//             };
//         });
//     }

//     render() {
//         return (
//             <div className="state">
//                 <h1 className="state--title">Should I go out tonight?</h1>
//                 <div className="state--value" onClick={this.toggleGoOut}>
//                     <h1>{this.state.goOut}</h1>
//                 </div>
//                 <h1>Username: {this.props.username}</h1>
//             </div>
//         );
//     }
// }

// import React from "react";
// export default class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0,
//         };

//         this.add = this.add.bind(this);
//         this.subtract = this.subtract.bind(this);
//     }

//     add() {
//         this.setState((prevState) => ({ count: prevState.count + 1 }));
//     }

//     subtract() {
//         this.setState((prevState) => ({ count: prevState.count - 1 }));
//     }

//     render() {
//         return (
//             <div className="counter">
//                 <button className="counter--minus" onClick={this.subtract}>
//                     –
//                 </button>
//                 <div className="counter--count">
//                     <h1>{this.state.count}</h1>
//                 </div>
//                 <button className="counter--plus" onClick={this.add}>
//                     +
//                 </button>
//             </div>
//         );
//     }
// }

import React from "react";

export default class App extends React.Component {
    // const [contact, setContact] = React.useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (719) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: false,
    // });

    state = {
        contact: {
            firstName: "John",
            lastName: "Doe",
            phone: "+1 (719) 555-1212",
            email: "itsmyrealname@example.com",
            isFavorite: false,
        },
    };

    toggleFavorite = () => {
        this.setState((prevContact) => ({
            
            isFavorite: !prevContact.isFavorite,
        }));
        console.log(this.state.contact);
    };

    render() {
        let starIcon = this.state.contact.isFavorite
            ? "star-filled.png"
            : "star-empty.png";
        return (
            <main>
                <article className="card">
                    <img src="./src/assets/user.png" className="card--image" />
                    <div className="card--info">
                        <img
                            src={`./src/assets/${starIcon}`}
                            className="card--favorite"
                            onClick={this.toggleFavorite}
                        />
                        <h2 className="card--name">
                            {this.state.contact.firstName}{" "}
                            {this.state.contact.lastName}
                        </h2>
                        <p className="card--contact">
                            {this.state.contact.phone}
                        </p>
                        <p className="card--contact">
                            {this.state.contact.email}
                        </p>
                    </div>
                </article>
            </main>
        );
    }
}

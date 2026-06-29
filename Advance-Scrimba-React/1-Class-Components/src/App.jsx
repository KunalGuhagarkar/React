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

// import React from "react";

// export default class App extends React.Component {
//     state = {
//         contact: {
//             firstName: "John",
//             lastName: "Doe",
//             phone: "+1 (719) 555-1212",
//             email: "itsmyrealname@example.com",
//             isFavorite: false,
//         },
//     };

//     toggleFavorite = () => {
//         this.setState((prevContact) => ({
//             contact: {
//                 ...prevContact.contact,
//                 isFavorite: !prevContact.contact.isFavorite,
//             },
//         }));
//     };

//     render() {
//         console.log(this.state.contact);
//         let starIcon = this.state.contact.isFavorite
//             ? "star-filled.png"
//             : "star-empty.png";
//         return (
//             <main>
//                 <article className="card">
//                     <img src="./src/assets/user.png" className="card--image" />
//                     <div className="card--info">
//                         <img
//                             src={`./src/assets/${starIcon}`}
//                             className="card--favorite"
//                             onClick={this.toggleFavorite}
//                         />
//                         <h2 className="card--name">
//                             {this.state.contact.firstName}{" "}
//                             {this.state.contact.lastName}
//                         </h2>
//                         <p className="card--contact">
//                             {this.state.contact.phone}
//                         </p>
//                         <p className="card--contact">
//                             {this.state.contact.email}
//                         </p>
//                     </div>
//                 </article>
//             </main>
//         );
//     }
// }

// import React from "react";

// export default class App extends React.Component {
//     state = {
//         character: {},
//     };

//     componentDidMount() {
//         console.log("componentDidMount");
//         fetch("https://swapi.info/api/people/1")
//             .then((res) => res.json())
//             .then((data) =>
//                 this.setState({
//                     character: data,
//                 }),
//             );
//     }

//     render() {
//         console.log("render");
//         return <h1>{this.state.character.name}</h1>;
//     }
// }

import React from "react";

class App extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: "",
    };

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        type === "checkbox"
            ? this.setState({
                  [name]: checked,
              })
            : this.setState({
                  [name]: value,
              });
    };

    componentDidMount() {
        console.log("Mount");
    }

    componentDidUpdate() {
        console.log("Update");
        console.log(this.state);
        localStorage.setItem("localData", JSON.stringify(this.state));
        const localData = localStorage.getItem("localData");
        console.log(localData);
    }

    render() {
        console.log("Render");
        return (
            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    name="firstName"
                    value={this.state.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    name="lastName"
                    value={this.state.lastName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}
                />
                <textarea
                    value={this.state.comments}
                    placeholder="Comments"
                    onChange={this.handleChange}
                    name="comments"
                />
                <input
                    type="checkbox"
                    id="isFriendly"
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}
                    name="isFriendly"
                />
                <label htmlFor="isFriendly">Are you friendly?</label>
                <br />
                <br />

                <fieldset>
                    <legend>Current employment status</legend>
                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={this.state.employment === "unemployed"}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />

                    <input
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={this.state.employment === "part-time"}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />

                    <input
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={this.state.employment === "full-time"}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>
                <br />

                <label className="favColor" htmlFor="favColor">
                    What is your favorite color?
                </label>
                <br />
                <select
                    id="favColor"
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
            </form>
        );
    }
}

export default App;

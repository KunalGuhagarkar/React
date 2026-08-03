// import "./App.css";
// import Content from "./components/Content";

// function App() {
//     return (
//         <>
//             <h1>Hello World</h1>
//             <Content />
//         </>
//     );
// }

// export default App;

import React from "react";
import ReactDOM from "react-dom";

class Main extends React.Component {
    render() {
        return (
            <>
                <h1>Progress Tracker</h1>
                <div>
                    <div className="section">
                        <div className="weekday-title">M</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">T</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">W</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">T</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">F</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">S</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">S</div>
                    </div>
                </div>
            </>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));

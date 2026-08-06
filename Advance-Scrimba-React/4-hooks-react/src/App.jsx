import "./App.css";

import UseState from "./components/UseState";
import UseReducer from "./components/UseReducer";

function App() {
    return (
        <div>
            <h1>useState Hook</h1>
            {/* <UseState /> */}
            <UseReducer />
        </div>
    );
}

export default App;

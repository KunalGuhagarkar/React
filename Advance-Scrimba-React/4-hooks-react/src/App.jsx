import "./App.css";

import UseState from "./components/UseState";
import UseReducer from "./components/UseReducer";

function App() {
    return (
        <div>
            <h1>React Hooks</h1>
            {/* <UseState /> */}
            <UseReducer username="Kunal" />
        </div>
    );
}

export default App;

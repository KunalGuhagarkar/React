import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            {
                count: state.count + 1;
            }
            break;
        case "decrement":
            {
                count: state.count - 1;
            }
            break;

        default:
            break;
    }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function increment() {
        dispatch({ type: "increment" });
    }

    function decrement() {
        dispatch({ type: "decrement" });
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </>
    );
}

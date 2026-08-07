import { useReducer } from "react";

function reducer(state, action) {
    return { count: state.count + 1 };
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function increment() {
        dispatch();
    }

    // function decrement() {}

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </>
    );
}

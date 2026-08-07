import { useReducer } from "react";

function reducer() {}

export default function UseReducer() {
    const [state, reducer] = useReducer(reducer, { age: 23 });

    return (
        <>
            <h3>Hello from useReducer</h3>
        </>
    );
}

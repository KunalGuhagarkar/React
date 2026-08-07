import { useReducer } from "react";

function reducer(state, action) {
    // ...
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    // ...
}

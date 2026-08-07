// import { useReducer } from "react";

// function reducer(state, action) {
//     switch (action.type) {
//         case "increment":
//             return {
//                 count: state.count + 1,
//             };

//         case "decrement":
//             return {
//                 count: state.count - 1,
//             };

//         default:
//             return state;
//     }
// }

// export default function UseReducer() {
//     const [state, dispatch] = useReducer(reducer, { count: 0 });

//     function increment() {
//         dispatch({ type: "increment" });
//     }

//     function decrement() {
//         dispatch({ type: "decrement" });
//     }

//     return (
//         <>
//             <button onClick={decrement}>-</button>
//             <span>{state.count}</span>
//             <button onClick={increment}>+</button>
//         </>
//     );
// }


// Example 2

import { useReducer } from "react";

function reducer(state, action) {

}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, {age: 23});

    return (
        <>
            <button>Increment Age by 1</button>
            <p>Age is: {state.age}</p>
        </>
    );
}
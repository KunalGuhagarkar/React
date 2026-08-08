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
// import { useReducer } from "react";

// function reducer(state, action) {
//     return { age: state.age + 1 };
// }

// export default function UseReducer() {
//     const [state, dispatch] = useReducer(reducer, { age: 23 });

//     function handleIncrementAgeClick() {
//         dispatch();
//     }

//     return (
//         <>
//             <button onClick={handleIncrementAgeClick}>
//                 Increment Age
//             </button>
//             <p>Age is: {state.age}</p>
//         </>
//     );
// }

// Example 3
// import { useReducer } from "react";

// function reducer(state, action) {
//     console.log(action);

//     switch (action.type) {
//         case "increment_age":
//             return { ...state, age: state.age + 1 };

//         case "name_change":
//             return { ...state, name: action.nextName };

//         default:
//             return state;
//     }
//     return { age: state.age + 1 };
// }

// export default function UseReducer() {
//     const [state, dispatch] = useReducer(reducer, { age: 23, name: "Kunal" });

//     function handleIncrementAgeClick() {
//         dispatch({ type: "increment_age" });
//     }

//     function handleNameChange(e) {
//         dispatch({ type: "name_change", nextName: e.target.value });
//     }

//     return (
//         <>
//             <button onClick={handleIncrementAgeClick}>Increment Age</button>
//             <input type="text" onChange={handleNameChange} value={state.name} />
//             <p>Age is: {state.age}</p>
//             <p>Name is: {state.name}</p>
//         </>
//     );
// }


// Avoiding recreating the initial state
import { useReducer } from "react";

function createInitialState(username) {
    return {username: 'Kunal'}
}

function reducer() {

}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, createInitialState(username));

    return (
        <>
            <input type="text" onChange={handleUsernameChange} value={state.username} />
        </>
    )
}
// Manage Form Input
// import { useState } from "react";

// export default function UseState() {
//     const [name, setName] = useState("");

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };

//     return (
//         <>
//             <input
//                 type="text"
//                 placeholder="Enter Name"
//                 value={name}
//                 onChange={handleNameChange}
//             />

//             <h1>Name is {name}</h1>
//         </>
//     );
// }

// Toggle Visibility
// import { useState } from "react";

// export default function UseState() {
//     const [toggle, setToggle] = useState(false);

//     function toggleNameHandler() {
//         setToggle((prevtoggle) => !prevtoggle);
//     }

//     return (
//         <>
//             <button onClick={toggleNameHandler}>Toggle Info</button>
//             {toggle ? <h1>Important Information</h1> : null}
//         </>
//     );
// }

// Dynamic Styling
// import { useState } from "react";

// export default function UseState() {
//     const [active, setActive] = useState(false);

//     return (
//         <>
//             <button
//                 className={active ? "active" : "inactive"}
//                 onClick={() => setActive(!active)}
//             >
//                 {active ? "Active" : "Inactive"}
//             </button>
//         </>
//     );
// }

// Counters
// import { useState } from "react";

// export default function UseState() {
//     const [counter, setCounter] = useState(0);

//     function handleIncrement() {
//         setCounter((prevCount) => prevCount + 1);
//     }

//     function handleDecrement() {
//         setCounter((prevCount) => prevCount - 1);
//     }

//     return (
//         <>
//             <h1>Counter: {counter}</h1>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handleDecrement}>Decrement</button>
//         </>
//     );
// }

// Updating state based on the previous state
// import { useState } from "react";

// export default function UseState() {
//     const [age, setAge] = useState(23);

//     // const handleIncreaseAge = () => {
//     //     setAge(prevAge => prevAge + 1);
//     //     setAge(prevAge => prevAge + 1);
//     //     setAge(prevAge => prevAge + 1);
//     // }

//     const handleIncreaseAge = () => {
//         setAge(age + 1);
//         setAge(age + 1);
//         setAge(age + 1);
//     };

//     return (
//         <>
//             <h1>Age: {age}</h1>
//             <button onClick={handleIncreaseAge}>Age + 3</button>
//         </>
//     );
// }

// Updating objects and arrays in state
// import { useState } from "react";

// export default function UseState() {
//     const [form, setFormData] = useState({
//         firstname: "Kunal",
//         lastname: "Guhagarkar",
//         email: "kunal@gmail.com",
//     });

//     function handleFormDataChange(e) {
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [e.target.name]: e.target.value,
//         }));
//     }

//     return (
//         <>
//             <div>
//                 First Name:
//                 <input
//                     type="text"
//                     value={form.firstname}
//                     name="firstname"
//                     onChange={handleFormDataChange}
//                 />
//                 <br />
//                 <br />
//                 Last Name:
//                 <input
//                     type="text"
//                     value={form.lastname}
//                     name="lastname"
//                     onChange={handleFormDataChange}
//                 />
//                 <br />
//                 <br />
//                 Email:
//                 <input
//                     type="email"
//                     value={form.email}
//                     name="email"
//                     onChange={handleFormDataChange}
//                 />
//                 <h1>Form Data:</h1>
//                 <h3>
//                     Full Name: {form.firstname} {form.lastname}
//                 </h3>
//                 <h3>Email: {form.email}</h3>
//             </div>
//         </>
//     );
// }

// import { useState } from "react";

// function todoList() {
//     return ["Buy Milk", "Buy Tea", "Buy Bread"];
// }

// function TodoComponent({ item }) {
//     return (
//         <>
//             <input type="checkbox" name={item} />
//             <label>{item}</label>
//             <br />
//         </>
//     );
// }

// export default function UseState() {
//     const [todo, setTodo] = useState(todoList);
//     const [newItem, setNewItem] = useState("");

//     function handleNewItem(e) {
//         setNewItem(e.target.value);
//     }

//     function todoItemAddHandler() {
//         setTodo((prevTodo) => [...todo, newItem]);
//         setNewItem("");
//     }

//     return (
//         <>
//             <label>Add Item: </label>
//             <input type="text" value={newItem} onChange={handleNewItem} />
//             <button onClick={todoItemAddHandler}>Add</button>

//             <div>
//                 <h1>To Do List:</h1>
//                 {todo.map((item, index) => (
//                     <TodoComponent key={index} item={item} />
//                 ))}
//             </div>
//         </>
//     );
// }

// Resetting Form using key
import { useState } from "react";

export function FormComponent() {
    const [name, setName] = useState("Kunal");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    return (
        <>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Hello, {name}</p>
        </>
    );
}

export default function UseState() {
    return (
        <div>
            <button>Reset</button>
            <br />
            <br />
            <FormComponent />
        </div>
    );
}

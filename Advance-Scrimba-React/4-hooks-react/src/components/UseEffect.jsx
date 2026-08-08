import { useState } from "react";

export default function UseEffect() {

    const [animalName, setAnimalName] = useState("");

    return (
        <>
            <button onClick={() => setAnimalName("Lion")}>Lion</button>
            <button onClick={() => setAnimalName("Tiger")}>Tiger</button>
            <button onClick={() => setAnimalName("Panther")}>Panther</button>
        </>
    );
}

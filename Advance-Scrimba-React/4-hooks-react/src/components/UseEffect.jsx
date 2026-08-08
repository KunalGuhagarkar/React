import { useState, useEffect } from "react";

export default function UseEffect() {
    const [animalName, setAnimalName] = useState("");
    console.log("render");

    useEffect(() => {
        console.log("Animal Changed");
    }, [animalName]);

    return (
        <>
            <button onClick={() => setAnimalName("Lion")}>Lion</button>
            <button onClick={() => setAnimalName("Tiger")}>Tiger</button>
            <button onClick={() => setAnimalName("Panther")}>Panther</button>

            <h3>{animalName}</h3>
        </>
    );
}

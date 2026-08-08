export default function UseEffect() {
    return (
        <>
            <button onClick={() => setAnimalName("Lion")}>Lion</button>
            <button onClick={() => setAnimalName("Tiger")}>Tiger</button>
            <button onClick={() => setAnimalName("Panther")}>Panther</button>
        </>
    );
}

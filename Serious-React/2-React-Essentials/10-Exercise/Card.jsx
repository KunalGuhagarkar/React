export default function Card({name, children}) {
    return (
        <div className="card">
            <h1>{name}</h1>
            {children}
        </div>
    );
}
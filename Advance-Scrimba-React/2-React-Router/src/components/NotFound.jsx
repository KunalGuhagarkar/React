import { useSearchParams } from "react-router-dom";

export default function NotFound() {
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams);

    return (
        <div className="not-found-container">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <button onClick={() => setSearchParams("")}>Return to Home</button>
        </div>
    );
}

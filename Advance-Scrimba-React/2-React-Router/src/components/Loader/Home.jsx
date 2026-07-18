import { useLoaderData } from "react-router-dom";

export function loader() {
    // throw new Error("This is an error")
    return "The Data is here";
}

export default function Home() {
    const data = useLoaderData();
    console.log(data);
    // throw new Error("This is an Error");
    return (
        <main>
            <h1>Home page</h1>
        </main>
    );
}

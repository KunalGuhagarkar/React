import { useSearchParams, useLoaderData } from "react-router-dom";

export function loginLoader({ request }) {
    const url = new URL(request.url).searchParams.get("message");
    return url;
}

export default function Login() {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const message = searchParams.get("message");
    // console.log(message);

    const message = useLoaderData();

    return (
        <>
            {message && <h2>{message}</h2>}
            <h1>Login Page goes here!</h1>
        </>
    );
}

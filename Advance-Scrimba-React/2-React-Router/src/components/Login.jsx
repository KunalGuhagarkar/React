import React from "react";
import {
    Navigate,
    useNavigate,
    useLoaderData,
    Form,
    redirect,
    useActionData,
} from "react-router-dom";

import { loginUser } from "../api";
import { useState } from "react";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        const data = await loginUser({ email, password });
        console.log(data);
        localStorage.setItem("isLoggedIn", true);
        const response = redirect("/host");
        response.body = true;
        return response;
    } catch (error) {
        return error.message;
    }
}

export default function Login() {
    const [status, setStatus] = useState("idle");
    const error = useActionData();
    const message = useLoaderData();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        setStatus("submitting");
        loginUser(loginFormData)
            .then((data) => {
                navigate("/host", { replace: true });
                setError(null);
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })
            .finally(() => setStatus("idle"));
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error}</h3>}
            <Form method="post" className="login-form" replace>
                <input name="email" type="email" placeholder="Email address" />
                <input name="password" type="password" placeholder="Password" />
                <button disabled={status === "submitting"}>
                    {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    );
}

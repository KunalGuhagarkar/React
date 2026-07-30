import { Form, useActionData, redirect, useNavigation } from "react-router-dom";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fakeLoginUser(creds) {
    await sleep(1000);
    if (creds.email === "b@b.com" && creds.password === "p123") {
        localStorage.setItem("loggedin", true);
        return {
            email: creds.email,
            token: "1234567890abcdef",
        };
    }
    throw new Error("Couldn't log the user in");
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        const userStatus = await fakeLoginUser({ email, password });
        console.log(userStatus);
        return redirect("/protected");
    } catch (error) {
        return error.message;
    }
}

export default function Login() {
    const error = useActionData();
    const navigation = useNavigation();
    console.log(navigation.state);
    return (
        <Form method="post">
            <h1>Login</h1>
            {error && <h4 className="red">{error}</h4>}
            <input type="email" name="email" placeholder="Email address" />
            <br />
            <input type="password" name="password" placeholder="Password" />
            <br />
            <button disabled={navigation.state === "submitting"}>
                {navigation.state === "submitting" ? "Logging In..." : "Log In"}
            </button>
        </Form>
    );
}

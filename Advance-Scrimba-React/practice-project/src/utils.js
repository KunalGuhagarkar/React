import { redirect } from "react-router-dom";

export function requireAuth(request) {
    const url = new URL(request.url).pathname;
    console.log(url);
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn) {
        const response = redirect(`/login?redirectTo=${url}`);
        throw response;
    }
    return null;
}

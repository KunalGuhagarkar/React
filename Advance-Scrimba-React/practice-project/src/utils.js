import { redirect } from "react-router-dom";

export function requireAuth() {
    const userLoggedIn = false;

    if (!userLoggedIn) {
        const response = redirect("/login?message=You need to Login first");
        throw response;
    }
    return null;
}

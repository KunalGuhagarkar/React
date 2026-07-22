import { redirect } from "react-router-dom";

export function requireAuth() {
    const userLoggedIn = true;

    if (!userLoggedIn) {
        const response = redirect("/login");
        response.body = true;
        throw response;
    }
    return null;
}

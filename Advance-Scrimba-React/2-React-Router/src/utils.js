import { redirect } from "react-router-dom";

export function requireAuth() {
    const userLoggedIn = false;

    if (!userLoggedIn) {
        const response = redirect("/login");
        response.body = true;
        throw response;
    }
    return null;
}

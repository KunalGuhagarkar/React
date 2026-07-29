import { redirect } from "react-router-dom";

export function requireAuth() {
    if (!JSON.parse(localStorage.getItem("isLoggedIn"))) {
        const response = redirect("/login");
        response.body = true;
        throw response;
    }
    return null;
}

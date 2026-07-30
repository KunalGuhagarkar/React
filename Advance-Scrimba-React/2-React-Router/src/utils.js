import { redirect } from "react-router-dom";

export async function requireAuth(request) {
    const url = new URL(request.url);
    if (!JSON.parse(localStorage.getItem("isLoggedIn"))) {
        const response = redirect(`/login?redirectTo=${url.pathname}`);
        response.body = true;
        throw response;
    }
    return null;
}

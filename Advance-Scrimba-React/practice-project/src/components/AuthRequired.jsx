import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
    // Fake auth
    const isLoggedIn = false;
    // If the user is not logged in
    if (!isLoggedIn) {
        // Redirect them to the /login route
        return <Navigate to="/login" />;
    }
    // Otherwise:
    return <Outlet />;
}

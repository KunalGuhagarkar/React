// import { redirect } from "react-router-dom";

// export function requireAuth(request) {
//     const url = new URL(request.url).pathname;
//     console.log(url);
//     const isLoggedIn = localStorage.getItem("loggedin")

//     if (!isLoggedIn) {
//         const response = redirect(`/login?redirectTo=${url}`);
//         throw response;
//     }
//     return null;
// }

export async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

export async function getWeather() {
    await sleep(3000);
    const res = await fetch(
        "https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Salt+Lake+City&units=imperial",
    );
    if (!res.ok) {
        throw {
            error: "Problem getting weather info",
        };
    }
    const data = await res.json();
    return data;
}

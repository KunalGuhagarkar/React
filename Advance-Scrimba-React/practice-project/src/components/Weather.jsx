import React, { Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";
import { sleep, getWeather } from "../utils";

export async function loader() {
    const weatherPromise = getWeather();
    console.log(weatherPromise);
    return defer({ weather: weatherPromise });
}

export default function Weather() {
    const loaderData = useLoaderData();

    return (
        <section className="weather-container">
            <h1>Weather in Salt Lake City</h1>
            <Await resolve={loaderData.weather}>
                {(loadedWeatherData) => {
                    console.log(loadedWeatherData);
                    const iconUrl = `http://openweathermap.org/img/wn/${loadedWeatherData.weather[0].icon}@2x.png`;
                    return (
                        <>
                            <h3>{loadedWeatherData.main.temp}ºF</h3>
                            <img src={iconUrl} />
                        </>
                    );
                }}
            </Await>
        </section>
    );
}

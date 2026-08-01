import { Link, useLoaderData, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";

export function loader() {
    return { hostVans: getHostVans() };
}

function renderhostVansElements(vans) {
    const hostVansEls = vans.map((van) => (
        <Link to={van.id} key={van.id} className="host-van-link-wrapper">
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ));
    return (
        <div className="host-vans-list">
            {vans.length > 0 && <section>{hostVansEls}</section>}
        </div>
    );
}

export default function HostVans() {
    const vans = useLoaderData();

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <Suspense fallback={<h2>Loading Host Vans...</h2>}>
                <Await resolve={vans.hostVans}>{renderhostVansElements}</Await>
            </Suspense>
        </section>
    );
}

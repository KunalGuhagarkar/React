import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type");
    console.log(typeFilter);

    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    const displayFilterVans = typeFilter
        ? vans.filter((van) => typeFilter === van.type)
        : vans;

    const vanElements = displayFilterVans.map((van) => {
        return (
            <div key={van.id} className="van-tile">
                <Link to={`/vans/${van.id}`}>
                    <img src={van.imageUrl} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>
                            ${van.price}
                            <span>/day</span>
                        </p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                </Link>
            </div>
        );
    });

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                {typeFilter && (
                    <button
                        className="van-type clear-filters"
                        onClick={() => setSearchParams({})}
                    >
                        All Vans
                    </button>
                )}

                <button
                    className={`van-type simple ${typeFilter == "simple" ? "selected" : ""}`}
                    onClick={() => setSearchParams({ type: "simple" })}
                >
                    Simple
                </button>
                <button
                    className="van-type rugged"
                    onClick={() => setSearchParams({ type: "rugged" })}
                >
                    Rugged
                </button>
                <button
                    className="van-type luxury"
                    onClick={() => setSearchParams({ type: "luxury" })}
                >
                    Luxury
                </button>
            </div>
            <div className="van-list">{vanElements}</div>
        </div>
    );
}

export default Vans;

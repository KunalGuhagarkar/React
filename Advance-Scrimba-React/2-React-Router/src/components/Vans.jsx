import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    const vanElements = vans.map((van) => {
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

    const vanSet = new Set(vans.map((van) => van.type));

    const filterButtons = [...vanSet].map((van) => {
        setSearchParams(`?type=${van}`);
        console.log(searchParams.get("type"));
        return <button key={van}>{van}</button>;
    });

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            {filterButtons}
            <div className="van-list">{vanElements}</div>
        </div>
    );
}

export default Vans;

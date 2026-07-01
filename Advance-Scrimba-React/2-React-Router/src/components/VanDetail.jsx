import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetch(`/api/vans/${}`)
    })

    return <h1>Van Detail page goes here</h1>;
}

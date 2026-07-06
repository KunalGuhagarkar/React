import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const { currentVan } = useOutletContext();

    return <h2>${currentVan.price.toFixed(2)}/day</h2>;
}

import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {

    const currentVan = useOutletContext();

    return <h1>{currentVan.name}</h1>
}
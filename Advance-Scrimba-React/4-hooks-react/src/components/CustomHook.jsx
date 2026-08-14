import { useEffect, useState } from "react";

function useCustom() {
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue("updated");
    }, []);

    return value;
}

export default function CustomHook() {
    const value = useCustom();

    return (
        <>
            <h3>Custom Hook</h3>
            <h4>{value}</h4>
        </>
    );
}

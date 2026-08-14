import { useEffect, useState } from "react";

function useCustom(initialValue = "") {
    const [value, setValue] = useState(initialValue || '');

    // useEffect(() => {
    //     setValue("updated");
    // }, []);

    return value;
}

export default function CustomHook() {
    const value = useCustom('Kunal');

    return (
        <>
            <h3>Custom Hook</h3>
            <h4>{value}</h4>
        </>
    );
}

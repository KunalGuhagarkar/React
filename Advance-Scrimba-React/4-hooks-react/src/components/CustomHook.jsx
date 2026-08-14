import { useState } from "react";


function useCustom() {
    const [value, setValue] = useState();
}

export default function CustomHook() {
    return (
        <>
            <h3>Custom Hook</h3>
        </>
    );
}
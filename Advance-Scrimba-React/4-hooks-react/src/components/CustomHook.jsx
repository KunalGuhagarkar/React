import { useEffect, useState } from "react";


function useCustom() {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue('updated')
    }, []);
}

export default function CustomHook() {

    useCustom();

    return (
        <>
            <h3>Custom Hook</h3>
        </>
    );
}
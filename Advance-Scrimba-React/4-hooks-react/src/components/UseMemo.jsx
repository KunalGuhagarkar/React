import { useMemo } from "react";

function UseMemo() {
    return (
        <>
            
        </>
    )
}

function slowFunction(num) {
    for(let i = 0; i < 100000000000; i++) {};
    return num*2;
}

export default UseMemo;
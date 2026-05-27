// Using Function as Values

function handleTimeout() {
    console.log("Timed out");
}

const handleTimeout2 = () => {
    console.log("Timed out ...again");
}

setTimeout(handleTimeout, 1000);
setTimeout(handleTimeout2, 2000);
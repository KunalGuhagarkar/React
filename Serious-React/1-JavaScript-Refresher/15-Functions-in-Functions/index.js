// Functions inside of Functions

function init() {
    function greet() {
        console.log("Hi");
    }

    greet();
}

// greet(); // outside scope -> Error (not defined)
init();
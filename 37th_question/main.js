"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
//make a function
function make_shirt(size = "Large", printmessage = "I love typescript") {
    console.log(`creating a ${size} shirt with the ${printmessage} print on it`);
}
//calling a function with default values
make_shirt();
//calling a function now with Medium size and default message
make_shirt("Medium");
//calling a function now with small size and default message
make_shirt("Small");

// Sometimes, you may need to store a value in a variable. But you don’t know its type at the time of writing the program. And the unknown value may come from a third party API or user input.

// In this case, you want to opt-out of the type checking and allow the value to pass through the compile-time check.

// To do so, you use the any type. The any type allows you to assign a value of any type to a variable:



// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);

// If you declare a variable without specifying a type, TypeScript assumes that you use the any type. This feature is called type inference. Basically, TypeScript guesses the type of the variable. For example:


// The TypeScript any type allows you to store a value of any type. It instructs the compiler to skip type checking.
// Use the any type to store a value that you don’t actually know its type at the compile-time or when you migrate a JavaScript project over to a TypeScript project.

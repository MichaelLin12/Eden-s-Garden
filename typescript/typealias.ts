// Type aliases allow you to create a new name for an existing type. 

type chars = string;
let messsage: chars; // same as string type

type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
//input = false; // Compiler error

//Summary:
// Use type aliases to define new names for existing types.
// Sometimes, you will run into a function that expects a parameter that is either a number or a string

function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

// The problem with the parameters of the add() function is that its parameters have the any type. It means that you can call the function with arguments that are neither numbers nor strings, the TypeScript will be fine with it.

// To resolve this, you can use the TypeScript union type. The union type allows you to combine multiple types into one type.

let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
//result = false; // a boolean value, not OK

function add2(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

// A TypeScript union type allows you to store a value of one or serveral types in a variable.
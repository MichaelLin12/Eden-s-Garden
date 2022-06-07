// In JavaScript, you can call a function without passing any arguments even though the function specifies parameters. Therefore, JaveScript supports the optional parameters by default.

// In TypeScript, the compiler checks every function call and issues an error in the following cases:

// The number of arguments is different from the number of parameters specified in the function.
// Or the types of arguments are not compatible with the types of function parameters.

// To make a function parameter optional, you use the ? after the parameter name.

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

// The optional parameters must appear after the required parameters in the parameter list

// Use the parameter?: type syntax to make a parameter optional.
// Use the expression typeof(parameter) !== 'undefined' to check if the parameter has been initialized.
// The never type is a type that contains no values. Because of this, you cannot assign any value to a variable with a never type.

// Typically, you use the never type to represent the return type of a function that always throws an error.

function raiseError(message: string): never {
    throw new Error(message);
}


// The return type of the following function is inferred to the never type:

function reject() { 
    return raiseError('Rejected');
}

// If you have a function expression that contains an indefinite loop, its return type is also the never type.

// Variables can also acquire the never type when you narrow its type by a type guard that can never be true.

function fn(a: string | number): boolean {
    if (typeof a === "string") {
        return true;
    } else if (typeof a === "number") {
        return false;
    }  
    // make the function valid
    return neverOccur();
}

let neverOccur = () => {
    throw new Error('Never!');
}

//summary:
//The never type contains no value.
// The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.
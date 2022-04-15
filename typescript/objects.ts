let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);

// The employee object is an object type with a fixed list of properties. If you attempt to access a property that doesn’t exist on the employee object, you’ll get an error:


let worker: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// TypeScript has another type called Object with the letter O in uppercase. It’s important to understand the differences between them.

// The object type represents all non-primitive values while the Object type describes the functionality of all objects.

// For example, the Object type has the toString() and valueOf() methods that can be accessible by any object.


//An empty object is virtually useless it seems
let message: string = 'Hello World'
console.log(message);

let counter: number;
counter = 1;
// counter ='Hello';//Error


//other primitive types
let name_p1: string = 'John';
let age: number = 25;
let active: boolean = true;

//types in an array
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let items: (string|number)[] = ['1',1,null]

//how to get types to work in an object
let person: {
    name: string;
    age: number
};

person = {
    name: 'John',
    age: 25
}; // valid


//use types in a function
let greeting : (name: string) => string;
greeting = function (name: string) {
    return `Hi ${name}`;
};

let counter2:number = 1;

function increment(counter:number):number{
    return counter++;
}
// All numbers in TypeScript are either floating-point values or big integers. The floating-point numbers have the type number while the big integers get the type bigint

let price: number;
price = 9.95;
price = 9;

let counter_n: number = 0;
let x:number = 9.2, y: string = '5', z: number = 8.7;

let bin = 0b100;
let anotherBin:number = 0B010;

let octal: number = 0o10;

let hexadecimal: number = 0XA;

// JavaScript has the Number type (with the letter N in uppercase) that refers to the non-primitive boxed object. You should not use this Number type as much as possible in TypeScript.

// The big integers represent the whole numbers larger than 253 – 1. A Big integer literal has the n character at the end of an integer literal like this:

let big: bigint = 9007199254740991n;
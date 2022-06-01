// The string literal types allow you to define a type that accepts only one specified string literal.

let click: 'click';

// The click is a string literal type that accepts only the string literal 'click'. 

// The string literal type is useful to limit a possible string value in a variable.

// The string literal types can combine nicely with the union types to define a finite set of string literal values for a variable:

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid

// A TypeScript string literal type defines a type that accepts specified string literal.
// Use the string literal types with union types and type aliases to define types that accept a finite set of string literals.
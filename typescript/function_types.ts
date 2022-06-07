let add2: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };

    // If you assign other functions whose type doesn’t match to the add variable, TypeScript will issue an error:

    // TypeScript compiler can figure out the function type when you have the type on one side of the equation. This form of type inference is called contextual typing. For example:
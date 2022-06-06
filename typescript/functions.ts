function add1(a: number, b: number): number {
    return a + b;
}

function echo(message: string): void {
    console.log(message.toUpperCase());
}

// Use type annotations for function parameters and return type to keep the calling code inline and ensure the type checking within the function body.
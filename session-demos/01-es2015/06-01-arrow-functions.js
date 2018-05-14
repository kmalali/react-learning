function sum( a, b ) {
    let result = a+ b;
    return result;
}

let sum2 = function( a, b ) {
    let result = a + b;
    return result;
};

// => is called the "fat arrow" operator
let sum3 = ( a, b ) => {
    let result = a + b;
    return result;
};

console.log( sum3( 1, 2 ) );

let square = function( n ) {
    return n * n;
};

let square2 = n => n * n;
console.log( square( 8 ) );

let logSquare = n => console.log( 'square is ', n * n );
logSquare( 11 );

let getPerson = ( name, age ) => ({
    name: name,
    age: age
});
console.log( getPerson( 'John', 32 ) );
// ... - it collects comma-separated values as items in an array

function sum() {
    console.log( arguments[0] );
    console.log( arguments.length );

    let result = 0;

    for( let i = 1; i < arguments.length; i++ ) {
        result += arguments[i];
    }

    return result;
}

function sum2( fn, ...numbers ) { // the comma-separated values are grouped as items in a new array
    let result = 0;

    for( let i = 0; i < numbers.length; i++ ) {
        result += fn( numbers[i] );
    }

    return result;
}

function square( n ) {
    return n * n;
}

console.log( sum2( square, 1, 2 ) );
console.log( sum2( square, 1, 2, 3 ) );
console.log( sum2( square, 10, 20, 30, 40, 50, 60, 70 ) );
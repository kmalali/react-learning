// only trailing arguments can be collected into an array using rest operator
function sum( fn, ...nums ) {
    let result = 0;

    console.log( 'nums = ', nums );

    // in es5.. (difficult to use)
    let numbers = Array.prototype.slice.call( arguments, 1 );
    // sum up the items in an array
    result = numbers.reduce(function( acc, number ) {
        return acc + fn( number );
    }, 0);

    // in es5.. (lengthy)
    // for( let i = 1; i < arguments.length; i++ ) {
    //     result = result + fn( arguments[i] );
    // }

    return result;
}

var result = sum(
    Math.sqrt,
    1, 2, 3, 4
);

console.log( 'result = ', result );
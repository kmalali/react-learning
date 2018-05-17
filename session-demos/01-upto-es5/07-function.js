if( sum ) {
    console.log( sum( 1, 2 ) );
} else {
    console.log( 'sum is not defined' );
}

// Method #1 - Function declaration syntax
function sum( x, y ) { // hoisted
    var result = x + y;
    return result;
}

// does not return anything EXPLICITLY
function greet( name, message ) {
    console.log( message + ' ' + name + '!' );
}

var retVal = greet( 'John', 'Good morning' );
console.log( 'retVal = ', retVal );

if( sum2 ) { // you can also handle this using try..catch
    console.log( sum2( 3, 4 ) ); // error
} else {
    console.log( 'sum2 is not defined yet' );
}

// #Method 2 - Function expression syntax
var sum2 = function( x, y ) {
    return x + y;
};

console.log( sum2( 3, 4 ) );
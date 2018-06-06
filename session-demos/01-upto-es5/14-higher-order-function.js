function sum( a ) {
    return function( b ) {
        return a + b;
    };
}

var fn = sum( 1 );
var result = fn( 2 );
function foo( x, y ) {
    console.log( this, x, y  ); // every function has a "context" - it is accessed using "this" keyword
}

foo( 1, 2 );

var z = 3;

foo.call( z, 4, 5 );
// foo.apply( z, [ 4, 5 ] );
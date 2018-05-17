if( 0 ) { // 0 is a falsy value
    console.log( true );
} else {
    console.log( false );
}

// falsy values - false, 0, '', undefined, null
// anything that is NOT falsy IS truthy - {}, [], 1, 5.75, "svs"

var x = 0;
if( x ) {
    console.log( 'x is truthy' );
} else {
    console.log( 'x is falsy' );
}
// usually a third-part library code
function sum( a, b, callback ) {
    setTimeout( () => {
        let result = a + b;
        callback( result ); // this is the assurance given by sum function
    }, 2000);
}

// *** your application code ***
function logResult( result ) { // do whatever you want to do with the result in this function
    // console.log( result );

    // you can use the result in any way you like
}

var result = sum( 1, 2, logResult );

console.log( result ); // undefined
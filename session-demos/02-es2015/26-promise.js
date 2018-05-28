function sum( a, b ) {
    // resolve and reject are 2 functions created by the promis constructor
    // the function passed to the promise constructor will be called and passed (as arguments) the resolve and reject functions
    return new Promise( ( resolve, reject ) => {
        if( typeof a !== 'number' || typeof b !== 'number' ) {
            reject( new Error( 'Type of arguments should be number' ) );
            return;
        }
        
        setTimeout( () => {
            let result = a + b;
            resolve( result );
        }, 2000);
    });
}

// function logResult( result ) { // do whatever you want to do with the result in this function
//     console.log( result );
// }

// the promise object is returned immediately
// eventually the promise will either resolve or reject
var promise = sum( 1, 2 );

promise
    .then(function( result ) {
        console.log( result );
        return 'It is raining now';
    })
    .then(function( res ) {
        console.log( res );
    })
    .catch(function( err ) {
        console.log( err );
    })
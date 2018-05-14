function sort() {
    // arguments is an array-like object 
    console.log( arguments );
    console.log( arguments.length );
    console.log( arguments[0] ); // value 5, i.e first argument

    // arguments.sort(); // error - sort does not exist on objects (including the arguments object)

    // so how to convert this arguments object to an array (so we can simply sort using sort())?
    
    // in es5... (method 1)
    // let argsArray = Array.prototype.slice.call( arguments );
    // console.log( 'argsArray = ', argsArray );

    // in es2015 (method 2)
    let argsArray = [...arguments]; // spread operator
    console.log( 'argsArray = ', argsArray );

    // summing logic () - using arguments
    // var result = 0;
    // for( var i = 0; i < arguments.length; i++ ) {
    //     result = result + arguments[i];
    // }

    // return result;

    return argsArray.sort();
}

// Expected output [-1, 2, 3, 4, 5, 9]
console.log( sort( 5, 2, 9, 4, -1, 3 ) );

// Exercise: Given 2 arrays, how do we form a third array using spread operator?
var arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];
var arr3 = [ ...arr1, ...arr2 ]; // how do we concatenate arr1 and arr2 to get a value [1, 2, 3, 4, 5, 6] for this?

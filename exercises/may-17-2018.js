let arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];
let arr3 = [ ...arr1, ...arr2 ];
console.log( arr3 );

function greet( message, name ) {
    console.log( `${message} ${name}!` );
}

greet( 'Good Saturday morning', 'John' );

// concept of closures used here
function bind( fn, ...restBind ) {
    return function( ...restFn ) {
        fn( ...[...restBind, ...restFn] );
    }
}

let goodMorning = bind( greet, 'Good morning' );
let hello = bind( greet, 'Hello' );
let helloNamit = bind( greet, 'Hello', 'Namit' );

goodMorning( 'Mary' ); // Good morning Mary!
goodMorning( 'Barry' ); // Good morning Barry!

hello( 'Rajesh' );
hello( 'Kavitha' );

helloNamit();

// how to use Function.prototype.bind, i.e. an instance method
function greet(message, name){
    console.log(`${name} ${message}`);
}
var temp2 = {};
var greetGM = greet.bind(temp2, "Goooooood Morning!!!!!!!!!!");
greetGM("Joey");
greetGM("Chandler");
greetGM("Ross");
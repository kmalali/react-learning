// A function is JS is also a JS object

function greet( message, name ) {
    console.log( 'this = ', this );
    console.log( greet.isLowercase );
    console.log( `${message} ${name}!` );
}

greet.isLowercase = true; // we can set up properties on functions
greet.printTimeOfTheDay = function() { // method set up on the function object
    console.log( new Date );
};

greet( 'Good Saturday morning', 'John' );

greet.printTimeOfTheDay();

console.log( greet.call );
console.log( greet.apply );

// fn.call() and fn.apply() will call fn itself!
// Using call() and apply() we can fix the context of fn (i.e. the "this" of fn) and pass the arguments
// they will call the function fn with the new context (i.e. context)

greet.call( { x : 1 }, 'Hello', 'Sita' );
greet.apply( { x : 1 }, [ 'Hello', 'Sita' ] );
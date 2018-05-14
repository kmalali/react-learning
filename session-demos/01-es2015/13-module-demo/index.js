// sayHello is not a global variable
// sayHello is scoped to the module
// sayHello is the default export - if nothing matches in an import, it is the default assigned

// this can include other js files like this...
// import { abc } from './pqr.js';

export function sayHello() {
    document.getElementById( 'message' ).innerHTML = 'Hello, world';
}

export function sayBye() {
    document.getElementById( 'message' ).innerHTML = 'Bye';
}

export default function() {
    console.log( 'default exported function' );
}

function sum( a, b ) {
    return a + b;
}

export let x = 1;
export class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
}

console.log( sum( 1, 2 ) ); // we can call

console.log( 'inside index.js' );

// something like this object is finally exported
// {
//     sayHello: sayHello,
//     sayBye: sayBye
// }
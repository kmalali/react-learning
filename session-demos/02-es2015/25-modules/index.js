// you can export
// 1. variables
// 2. functions
// 3. classes

let xEl = document.getElementById( 'x' );
let yEl = document.getElementById( 'y' );
let resultEl = document.getElementById( 'result' );

// re-export (export out all the exports of these 2 modules)
export * from './helpers/exponents.js';
export * from './helpers/strings.js';

export function renderResult() { // since we added "export" this function is now public
    resultEl.innerText = sum( +xEl.value, +yEl.value );
}

export class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
}

let PI = 3.14;

function greet() {
    console.log( 'hello' );
}

export default function sum( x, y ) {
    return x + y;
}

// imagine this to be the exported object - the default export does not become part of this exported object
// {
//     renderResult: renderResult,
//     Person: Person
// }
// to run in node, go to the folder where you craete this file and type ```node <filename>```

// use x before declaration
console.log( 'x = ', x ); // x will be undefined (but usable - no error)

var x = 1;
var x = 2;

console.log( 'x = ', x );

// use y before declsration
console.log( 'y = ', y ); // error!

// let's see with the let keyword
let y = 1;
// let y = 2; // error

console.log( 'y = ', y );

// only 2 scopes in JS (ES2011, ES5 v1.8.5)
var z = 1; // global variable

function foo() {
    var a = 3; // foo-scoped variable a
    console.log( 'z = ', z );
    console.log( '[inside foo] a = ', a );

    if( true ) {
        var b = 4; // function-scoped variable
        let c = 5; // block-scoped variable c
        console.log( '[inside if] b = ', b );
        console.log( '[inside if] c = ', c );
    }

    console.log( '[outside if but within foo] b = ', b ); // no error
    console.log( '[outside if but within foo] c = ', c ); // ??
}

foo();
// console.log( '[outside foo in global scope] a = ', a ); // error
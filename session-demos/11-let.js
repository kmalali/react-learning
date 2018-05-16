let x = 1;
// let x = 2; // error

if( true ) {
    let x = 3; // x is local to the if block
    console.log( 'x (inside if) = ', x );
}

console.log( 'x (outside if) = ', x );
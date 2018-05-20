var x = [
    1, 2, 3, 4, 5, 'hello', false, [ 6, 7, 8 ]
];

console.log( x );

console.log( x[0] );
console.log( x[x.length - 1] );
console.log( x[x.length - 1][0] );

x[100] = 'sdfsad';

console.log( x );

var numbers = [ 1, 2, 3, 4, 5 ];

var squares = numbers.map(function( item, index ) {
    console.log( index );
    return item * item;
});

console.log( squares ); // [ 1, 4, 9, 16, 25 ]
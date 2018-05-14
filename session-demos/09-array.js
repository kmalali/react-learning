var x = [
    1, 2, 3, 4, 5, 'hello', false, [ 6, 7, 8 ]
];

console.log( x );

console.log( x[0] );
console.log( x[x.length - 1] );
console.log( x[x.length - 1][0] );

x[100] = 'sdfsad';

console.log( x );
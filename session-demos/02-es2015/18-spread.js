// ... - rest / spread
// spread covered in this demo

let numbers = [ 1, 2, 9, 5, 8, 15, 13, 12, 4 ];

let max = Math.max( 1, 2, 9, 5, 8, 13, 12, 4 );
console.log( max );

// old JS way
max = Math.max.apply( null, numbers );
console.log( max );

max = Math.max( ...numbers ); // spreads out items in the array into comma-separated values
console.log( max );

// Exercise: How can we use the spread operator to concatenate 2 arrays
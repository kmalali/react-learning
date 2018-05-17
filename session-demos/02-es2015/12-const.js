const x = 1;
// x = 2; // error -- reassignment not allowed

if( true ) {
    const x = 3; // x is local to the if block
    console.log( 'x (inside if) = ', x );
}

console.log( 'x (outside if) = ', x );

const obj = {
    y: 2
};

Object.freeze( obj ); // this prevents any further changes to obj

// obj = { // error
//     z: 10
// };

obj.y = 3; // object is the same - ONLY the property is changing - so ok with const -- but since we froze the object, the change will silently fail

console.log( obj );
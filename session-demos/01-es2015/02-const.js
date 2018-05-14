// const vriables behave like let
const x = 1;
// x = 2; // error

const obj = {
    x : 1
};

obj.x = 2; // error?
console.log( 'obj = ', obj );

Object.freeze( obj ); // this is an es5 feature - prevents changes to object properties

obj.x = 3; // error
console.log( 'obj = ', obj );

obj = { // this is re-assignment - not allowed - error
    x: 4
};
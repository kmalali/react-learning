// NOT ES2015 - this is future specs
// Chrome supports ES6+ and we can run this in Chrome
// rest and spread features for the future (can be used in React since we use Babel)

var obj = {
    a: 1,
    b: 2,
    c: 3,
    prop: {
        d: 5,
        e: 6
    }
}

// for..in loop can be used to copy an object property-by-property

// ... does a shallow copy only - we have overriden prop with an explicitly spread prop
let objCopy = {...obj, prop: {...obj.prop } };

objCopy.a = 4;
objCopy.prop.d = 7;

console.log( obj );
console.log( objCopy );
// bag of key-value pairs
// keys are strings
// values can be of any data type
var john = {
    name: 'John',
    age: 32,
    'deep-blue': [
        1, 2, 3
    ],
    getName: function() {
        console.log( this ); // context, i.e. "this" will refer to the object, i.e. john

        // pitfall - foo is not a method of john object - context will be global (in Node.js) or window (in browser)
        function foo() {
            console.log( 'within foo, this = ', this ); // it will be the global object
        }

        foo();

        return this.name;
    }
};

console.log( john.name );
console.log( john['deep-blue'] );

console.log( john.getName() );

john.contact = 'john@example.com'; // add a property anytime to an object
console.log( john );

delete john.age; // you can remove a property anytime from an object
console.log( john );

john.getContact = function() {
    return this.contact;
};

console.log( john.getContact() );
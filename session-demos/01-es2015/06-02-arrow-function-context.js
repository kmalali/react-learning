// till es5 "class" in JS meant a function that was called with new operator
function Person( name, age ) {
    console.log( 'first line of constructor, this = ', this ); // "this" is the newly created objedt
    this.name = name;
    this.age = age;

    let that = this;

    // // method of a "object" is a property whose value is a function
    // this.setName = function( name ) {
    //     console.log( 'within setName, this = ', this );
    //     // this.name = name;
    // };

    // simple inner function (using es5 syntax) - not a methjod of newly created object
    // function inner() {
    //     console.log( 'that = ', that );
    //     that.worksFor = 'Harman';
    //     console.log( 'this wthin inner = ', this );
    // }

    let inner = ( arg1, arg2 ) => { // if we use arrow function syntax for inner functions, then the "this" within the arrow function is SAME as the "this" within the enclosing function
        // console.log( arguments );
        console.log( 'that = ', that );
        that.worksFor = 'Harman';
        console.log( 'this wthin inner = ', this );
    };

    inner( 1, 2 );
}

// method of a "object" is a property whose value is a function
Person.prototype.setName = function( name ) {
    console.log( 'within setName, this = ', this );
    // this.name = name;
};

var john = new Person( 'John', 32 );
john.setName( 'John Doe' );
console.log( john )

// inheritance in JS
function Employee( name, age, dept, role ) {
    Person.call( this, name, age );
}

Employee.prototype = Object.create( Person.prototype );
Employee.constructor = Employee;
class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    // getName() is a method of Person class - thus all objects of type Person can call it
    getName() {
        return this.age;
    }

    setName( name ) {
        this.name = name;
    }

    celebrateBirthday() {
        this.age++;
    }
}

let john = new Person( 'John', 32 );
console.log( john );
console.log( john.getName() );

john.setName( 'John Doe' );
console.log( john );

class Employee extends Person {
    constructor( name, age, dept, role ) {
        super( name, age ); // call super class (Person class) constructor
        this.dept = dept;
        this.role = role;
    }

    celebrateBirthday() {
        super.celebrateBirthday(); // calls the super class celebrateBirthday() method
        console.log( 'You receive a gift voucher of Rs. 1000 from us today' );
    }

    static sayHello() {
        console.log( 'hello from Employee class' );
    }
}

let vinay = new Employee( 'Vinay Kumar', 28 );
vinay.celebrateBirthday();
console.log( vinay.age );

Employee.sayHello();
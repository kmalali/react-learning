class Person {
    constructor( name, age ) {
        this.name = name; // all properties are public!
        this.age = age;
    }

    getName() {
        return this.name;
    }

    setName( name ) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge( age ) {
        this.age = age;
    }

    celebrateBirthday() {
        this.setAge( this.getAge() + 1 );
    }

    static sayHello() {
        console.log( 'hello' );
    }
}

class Employee extends Person {
    constructor( name, age, role, dept ) {
        super( name, age );
        this.role = role;
        this.dept = dept;
    }

    getDept() {
        return this.dept;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        console.log( 'Congrats! Please use this voucher for dinner at your favorite restaurant' );
    }
}

// equivalent of a static member variable
// In JS, a function is also an object
Employee.worksFor = 'Some big Organization!'; // static property
// Employee.sayHello = function() {
//     console.log( 'hello' );
// };

let john = new Employee( 'John', 32, 'Senior Accountant', 'Finance' );

console.log( john.getAge() );
john.celebrateBirthday();
console.log( john.getAge() );

Person.sayHello();

console.log( john.getDept() );

console.log( Employee.worksFor );

Employee.sayHello();

john.celebrateBirthday();
console.log( john.getAge() );
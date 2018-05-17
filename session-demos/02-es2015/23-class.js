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

let john = new Person( 'John', 32 );

console.log( john.getAge() );
john.celebrateBirthday();
console.log( john.getAge() );

Person.sayHello();
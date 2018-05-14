class C {
    constructor() {
        this.a = 'A'
    }

    getA() {
        return this.a;
    }
}

var x = new C();
console.log( x.getA() );
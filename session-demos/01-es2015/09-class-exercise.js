// Define Rectangle and Square classes - Square inherts from Rectangle
// getArea(), logDimensions()

class Rectangle {
    constructor( length, width ) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    constructor( side ) {
        super( side, side );
    }
}

let box = new Square( 3 );
console.log( box.getArea() );
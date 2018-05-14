let x = 1;

// old objet litreral syntax
// let obj = {
//     x: x
// };

let obj = {
    x,
    getX() {
        return this.x;
    }
};

console.log( obj );
console.log( obj.getX() );


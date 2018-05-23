// a function's context (this) depends on how the function got called
function foo() {
    console.log( 'this = ', this );
}

this.fooAnother = this.foo.bind({
    x: 1
});

var obj = {
    bar: fooAnother
};

console.log( 'foo === fooAnother : ', foo === fooAnother );
console.log( 'fooAnother === obj.bar : ', fooAnother === obj.bar );

fooAnother();
obj.bar();
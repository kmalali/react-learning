var x = 1; // global

function foo() {
    var x = 3, y = 2;
    console.log( x, y ); // 3 2

    if( true ) {
        var z = 5; // scoped to foo and not the block
    }

    console.log( 'within foo z = ', z ); // you can use z here

    // bar is local to foo
    function bar() {
        var x = 4;
        console.log( 'within bar x = ', x ); // 4
        console.log( 'within bar y = ', y ); // 2
    }

    bar();
}

foo();

console.log( 'outside foo x = ', x );
// console.log( 'outside foo y = ', y ); // error
let obj = {
    x: 1,
    y: {
        a: 10,
        b: 'hello',
        c: [
            { name: 'Raazi', year: 2018 },
            { name: 'The Infinity Wars', year: 2018 },
            { name: 'Sholay', year: 1975 }
        ]
    }
};

// Exercise: Last 2 left as exercise
// let x = obj.x, A = obj.y.a, first = obj.y.c[0], firstMovieName = obj.y.c[0].name;
let { x = 'Ex', z = 'Zee', y : { a : A, c : [ { name : first } ] } } = obj;

// a variable called "y" is NOT being created. Neither is "a". The variable created is "A"
console.log( x, z, A, first /*, firstMovieName */ );
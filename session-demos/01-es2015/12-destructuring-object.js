let movie = {
    name: 'Raid',
    cast: [
        'Ajay Devgan',
        'Ileana Dcruz',
        'Saurabh Shukla'
    ],
    showTimings: {
        'garuda': [ '3pm', '6pm' ],
        'phoenix': [ '10am', '10pm' ],
        'central': [ '12:30pm', '4:30pm' ]
    }
};

// let name = movie.name;
// let firstShowAtGaruda = movie.showTimings.garuda[0];

let { name = 'Sholay', awards, songs = [], showTimings: { garuda: GARUDA } } = movie;

console.log( 'name = ', name );
console.log( 'awards = ', awards ); // silently fail - no error. awards will be undefined
console.log( 'songs = ', songs )
console.log( 'GARUDA = ', GARUDA );
console.log( 'garuda = ', garuda );


function showDialog( { title, style: { headerColor }, dismissOnOverlayCLick } ) {
    // let { title, style: { headerColor }, dismissOnOverlayCLick } = options;

    // var title = options.title;
    // var headerColor = options.style.headerColor;
     return {
        x: 1,
        y: 2,
        z: 3
     };
}

let { x } = showDialog({
    title: 'Terms and COnditions',
    hasCloseButton: true,
    dismissOnOverlayCLick: false,
    style: {
        headerColor: 'blue'
    }
});
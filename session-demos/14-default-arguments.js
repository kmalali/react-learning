function greet( name, message = 'Good morning', followUpMessage = 'What can I do for you?' ) {
    // if( message === undefined ) {
    //     message = 'Good morning';
    // }

    // message = message || 'Good morning';

    console.log( `${message} ${name}!` );
    console.log( followUpMessage );
}

greet( 'John', 'Good morning' );

greet( 'Mary' );

greet( 'Barry', undefined, 'Howz it going?' );
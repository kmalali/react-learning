function greet( name, message ) {
    message = message || 'Good evening';
    console.log( message + ' ' + name + '!' );
}

greet( 'John', 'Good morning' );
greet( 'Mary' ); // message will be undefined

// message argument is assigned a default value of 'Good evening'
function greet2( message = 'Good evening', name ) {
    console.log( message + ' ' + name + '!' );
}

greet2( 'Good morning', 'John' );
greet2( undefined, 'Mary' ); // message will NOT be undefined - gets defult value of 'Good evening'
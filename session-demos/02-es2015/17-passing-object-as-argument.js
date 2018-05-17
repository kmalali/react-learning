/**
 * JSDoc 
 * @param {object} options The options object to configure the dialog
 * options.color
 * options.canCollapse
 * options.onClose
 * options.onOpen
 */

let defaultOptions = {
    color: 'gray',
    canCollapse: false,
    onClose: function() { },
    onClose: function() { }
}

function foo( { color, canCollapse : collapse, onClose: close, onOpen: open = function() { } } = defaultOptions ) {
    console.log( color );
    console.log( collapse.toString() );
    console.log( close.toString() );
    // console.log( close() );
    console.log( open.toString() );
}

foo({
    color: 'crimson',
    canCollapse: true,
    onClose: function() {
        console.log( 'dialog closed' );
    }
});

foo();

// Similarly we can use destructuring syntax to extract out required prop[erties of a returned object

function ShoppingCart() {
    // ...

    return {
        addItem: function( item ) {

        },
        removeItem: function( item ) {

        }
    };
}

let { addItem } = ShoppingCart();
addItem( 'Soap' );
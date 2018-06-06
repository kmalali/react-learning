function productsReducer( prevState = { products: [] }, action ) {
    let newState;

    switch( action.type ) {
        case 'PRODUCT_FETCH_SUCCESS':
            newState = { products: action.payload.products };
            break;
        default:
            newState = prevState
    }

    console.log( prevState, action, newState );

    return newState;    
}

export default productsReducer;
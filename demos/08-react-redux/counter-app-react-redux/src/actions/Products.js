import axios from 'axios';

export function productFetchSuccessAction( products ) {
    return {
        type: 'PRODUCT_FETCH_SUCCESS',
        payload: { products: products }
    }
}

export function loadProducts() {
    return function( dispatch ) {
        return axios.get( `http://localhost:4201/products` )
            .then( response => response.data )
            .then( products => dispatch( productFetchSuccessAction( products ) ) )
            .catch( err => console.log( err ) );
    };
}
import axios from 'axios';
const apiBaseUrl = 'http://localhost:4201', apiBaseUrlProducts = `${apiBaseUrl}/products`;

export let fetchProducts = () => axios.get( apiBaseUrlProducts ).then( response => response.data );
export let fetchProduct = ( productId ) => axios.get( `${apiBaseUrlProducts}/${productId}` ).then( response => response.data );
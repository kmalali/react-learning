let apiBaseUrl = `http://localhost:4201`, apiBaseUrlProducts = `${apiBaseUrl}/products`;

let fetchProducts = () => axios.get( apiBaseUrlProducts ).then( response => response.data );
let fetchProduct = productId => axios.get( `${apiBaseUrlProducts}/${productId}` ).then( response => response.data );
let fetchReviews = productId => axios.get( `${apiBaseUrlProducts}/${productId}/reviews` ).then( response => response.data );
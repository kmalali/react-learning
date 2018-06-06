import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; /* Thunk is a redux middleware. alternative is Redux Saga */
import App from './components/App';

import productsReducer from './reducers/Products';

let appStore = createStore( productsReducer, { products: [] }, /* initial state */ applyMiddleware( thunk ) );

ReactDOM.render( 
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

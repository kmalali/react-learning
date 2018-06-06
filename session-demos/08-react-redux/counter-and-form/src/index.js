import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import { counterReducer } from './reducers/counter';
import { formReducer } from './reducers/form';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let appStore = createStore(
    combineReducers(
        {
            counter: counterReducer,
            login: formReducer
        }
    ),
    {
        counter: 0,
        login: {
            username: '',
            password: ''
        }
    } /* initial state */
);

ReactDOM.render( 
    <Provider store={appStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
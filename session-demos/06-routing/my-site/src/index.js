import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './node_modules/bootstrap/dist/css/bootstrap.min.css';

// import './node_modules/jquery/dist/jquery'
// import './node_modules/bootstrap/dist/js/bootstrap.min';

import App from './App';


ReactDOM.render( <Router><App /></Router>, document.getElementById('root'));
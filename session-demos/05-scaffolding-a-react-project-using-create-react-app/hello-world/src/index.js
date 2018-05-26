import React from 'react';
import ReactDOM from 'react-dom';

import Panel from './Panel';

ReactDOM.render(
    <Panel heading='What is React?'>
        It is a JS library for building the view of a web application
    </Panel>,
    document.getElementById( 'root' )
);
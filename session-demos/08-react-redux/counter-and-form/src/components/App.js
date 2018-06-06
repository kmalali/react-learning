import React, { Component } from 'react';
import Redux from 'redux';

import { CounterContainer } from '../containers/Counter';
import { FormContainer } from '../containers/Form';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h2>Counter and Form app</h2>
                <hr />
                <CounterContainer />
                <hr />
                <FormContainer />
            </div>
        );
    }
}
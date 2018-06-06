import React, { Component } from 'react';

import { incrementAction, decrementAction } from '../actions/counter';

export default function Counter( props ) {
    return (
        <div>
            <input type="button" id="btn-increment" value="Increment" className="btn btn-primary btn-sm" onClick={props.actions.incrementAction} />
            { '  ' }
            <input type="button" id="btn-increment" value="Decrement" className="btn btn-danger btn-sm" onClick={props.actions.decrementAction} />
            { '  ' }
            <span id="counter">{props.counter}</span>
        </div>
    );
}
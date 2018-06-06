import React, { Component } from 'react';

export default function Form( props ) {
    function usernameUpdated( event ) {
        props.actions.usernameInputAction( event.target.value );
    }

    function passwordUpdated( event ) {
        props.actions.passwordInputAction( event.target.value );
    }

    return (
        <div>
            <form>
                <label>Username: <input type="text" name="username" onInput={usernameUpdated} /></label>
                <label>Password: <input type="password" name="password" onInput={passwordUpdated} /></label>
            </form>
            Username: {props.username}
            <br/>
            Password: {props.password}
        </div>
    );
}
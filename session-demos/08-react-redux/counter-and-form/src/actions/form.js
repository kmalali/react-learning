import { USERNAME_INPUT, PASSWORD_INPUT } from './action-constants';

// Action creators are functions that create Action objects
export let usernameInputAction = ( username ) => {
    return {
        type: USERNAME_INPUT,
        payload: username
    };
}

export let passwordInputAction = ( password ) => {
    return {
        type: PASSWORD_INPUT,
        payload: password
    };
}
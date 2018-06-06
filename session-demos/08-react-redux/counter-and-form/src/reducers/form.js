import { USERNAME_INPUT, PASSWORD_INPUT} from '../actions/action-constants';

export let formReducer = ( curState = { username: '', password: '' }, action ) => {
    let newState;

    switch( action.type ) {
        case USERNAME_INPUT:
            newState = { ...curState, username: action.payload };
            break;
        case PASSWORD_INPUT:
            newState = { ...curState, password: action.payload };
            break;
        default:
            newState = curState;
    }

    return newState;
};
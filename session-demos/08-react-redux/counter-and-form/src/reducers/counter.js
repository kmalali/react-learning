import { INCREMENT, DECREMENT } from '../actions/action-constants';

export let counterReducer = ( curState = { counter: 0 }, action ) => {
    let newState;

    switch( action.type ) {
        case INCREMENT:
            newState = { ...curState, counter: curState.counter + 1 };
            break;
        case DECREMENT:
            newState = { ...curState, counter: curState.counter - 1 };
            break;
        default:
            newState = curState;
    }

    return newState;
};
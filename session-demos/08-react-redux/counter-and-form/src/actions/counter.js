import { INCREMENT, DECREMENT } from './action-constants';

// Action creators are functions that create Action objects
export let incrementAction = () => {
    return {
        type: INCREMENT
    };
}

export let decrementAction = () => {
    return {
        type: DECREMENT
    };
}
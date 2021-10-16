// Action creator

// action definitions for wider use in dispatcher for example ...
const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
const COUNTER_RESET = 'COUNTER_RESET';

// Action creators
export const increment = () => ({ type: COUNTER_INCREMENT });
export const decrement = () => ({ type: COUNTER_DECREMENT });
export const reset = () => ({ type: COUNTER_RESET });

// Reducer
const INITIAL_STATE = {
    counter: 0
};

export default function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case COUNTER_INCREMENT:
            // return Object.assign({}, {counter: state.counter+1});
            return {...state, counter: state.counter + 1};
        case COUNTER_DECREMENT:
            return {...state, counter: state.counter - 1};
        case COUNTER_RESET:
            return {...state, counter: 0};
        default:
            return state;
    }
    // return state;
}
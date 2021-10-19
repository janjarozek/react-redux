const TOGGLE_NOTIFICATIONS = 'TOGGLE_NOTIFICATIONS';

// actions
export const toggleNotifications = () => ({type: TOGGLE_NOTIFICATIONS});

const INITIAL_STATE = {
    toggle: false
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_NOTIFICATIONS:
            return {...state, toggle: !state.toggle};
        default:
            return state;
    }
}

export default uiReducer;
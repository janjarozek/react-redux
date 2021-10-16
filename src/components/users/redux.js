// action creator definitions
const USERS_API_REQUESTED = 'users/USERS_API_REQUESTED';
const USERS_API_SUCCEDED = 'users/USERS_API_SUCCEDED';
const USERS_API_FAILED = 'users/USERS_API_FAILED';
// state
const INITIAL_STATE = {
    storeUsers: [],
    isLoading: false,
    isError: false
};
// actions creators
const usersRequest = () => ({ type: USERS_API_REQUESTED});
const usersSucceded = data => ({ type: USERS_API_SUCCEDED, payload: data});
const usersFailed = () => ({ type: USERS_API_FAILED});

export const getUsers = () => {
    return async function(dispatch){
        dispatch(usersRequest());
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
        if ( response.ok ) {
            const data = await response.json();
            dispatch(usersSucceded(data.slice(0,10)));
        } else {
            dispatch(usersFailed());
        }
    }
}

// reducer
export default function usersReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case USERS_API_REQUESTED:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case USERS_API_SUCCEDED:
            return {
                ...state,
                isLoading: false,
                storeUsers: action.payload,
                isError: false
            };
        case USERS_API_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default: return state;
    }

}
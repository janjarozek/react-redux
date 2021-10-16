// Action creator
// rozbijamy fetch async na wszystkie kroki oddzielnie, aby zażądzać globalnie async
// const POSTS_GET_API_DATA = 'POSTS_GET_API_DATA';

const FETCH_POSTS_REQUESTED = 'posts/FETCH_POSTS_REQUESTED';
const FETCH_POSTS_SUCCEDED = 'posts/FETCH_POSTS_SUCCEDED';
const FETCH_POSTS_FAILED = 'posts/FETCH_POSTS_FAILED';

// Reducer
const INITIAL_STATE = {
    posts: [],
    isLoading: false,
    isError: false
};

// Action creators

const fetchRequested = () => ({ type: FETCH_POSTS_REQUESTED });
const fetchSucceded = data => ({ type: FETCH_POSTS_SUCCEDED, payload: data });
const fetchFailed = () => ({ type: FETCH_POSTS_FAILED });

export const fetchPosts = () => {
    // klasyczne wykonanie fetch - tutaj się nie powiedzie, ponieważ redux nie zezwala na asynchroniczne funkcje
    // rozwiązaniem jest middle-wear, którego opakowujemy funkcją dispatch...
    return async function(dispatch) {
        dispatch(fetchRequested());
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        if ( response.ok ) {
            const data = await response.json();
            dispatch(fetchSucceded(data.slice(0,10)));
        } else {
            // console.error(response);
            dispatch(fetchFailed());
        }
    }
};

export default function postsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS_REQUESTED:
            // return Object.assign({}, {counter: state.counter+1});
            return {...state,
                isLoading: true,
                isError: false
            };
        case FETCH_POSTS_SUCCEDED:
            return {...state,
                isLoading: false,
                posts: action.payload,
                isError: false
            };
        case FETCH_POSTS_FAILED:
            return {...state,
                isLoading: false,
                isError: true};
        default:
            return state;
    }
}

// do złożonego zarządzania obiektami stanu warto rozważyć bibliotekę https://immutable-js.com/
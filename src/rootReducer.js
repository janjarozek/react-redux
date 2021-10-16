import { combineReducers } from 'redux'

import counterReducer from './components/CounterContainer/redux'
import postsReducer from './components/posts/redux'
import usersReducer from './components/users/redux'

const rootReducers = combineReducers({
    storeCounter: counterReducer,
    storePosts: postsReducer,
    storeUsers: usersReducer
})

export default rootReducers;
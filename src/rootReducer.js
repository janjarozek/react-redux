import { combineReducers } from 'redux'

import counterReducer from './components/CounterContainer/redux'
import postsReducer from './components/posts/redux'
import usersReducer from './components/users/redux'
import uiReducer from './components/ui/Appbar/redux'

const rootReducers = combineReducers({
    storeNotifications: uiReducer,
    storeCounter: counterReducer,
    storePosts: postsReducer,
    storeUsers: usersReducer
})

export default rootReducers;
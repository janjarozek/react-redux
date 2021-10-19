import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { Provider } from 'react-redux'

import './_sass/styles.scss'
import CounterContainer from './components/CounterContainer'
import Posts from './components/posts/containers/Posts'
import Users from './components/users/containers/Users'
import Appbar from './components/ui/Appbar'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware)
));
// const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(()=> console.log(store.getState()));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Appbar />
        <CounterContainer />
        <Posts />
        <Users />
      </Provider>
    </div>
  );
}

export default App;

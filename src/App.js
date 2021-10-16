import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { Provider } from 'react-redux'

import './_sass/styles.scss'
import CounterContainer from './components/CounterContainer'
import Posts from './components/posts/containers/Posts'
import Users from './components/users/containers/Users'

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(()=> console.log(store.getState()));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CounterContainer />
        <Posts />
        <Users />
      </Provider>
    </div>
  );
}

export default App;

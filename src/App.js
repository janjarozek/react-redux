import { createStore } from 'redux';
// import reducer, { increment, decrement, reset } from './components/CounterContainer/redux';
import reducer from './components/CounterContainer/redux';
import { Provider } from 'react-redux';

import './_sass/styles.scss';
import CounterContainer from './components/CounterContainer';
import Posts from './components/posts/containers/Posts';
import Users from './components/users/containers/Users';

const store = createStore(reducer);
// store.subscribe(() => console.log(store.getState()));

// store.dispatch(increment());
// store.dispatch(reset());
// store.dispatch(decrement());

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

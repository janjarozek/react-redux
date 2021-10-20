import { createStore, applyMiddleware, compose } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'

import './_sass/styles.scss'
import CounterContainer from './components/CounterContainer'
import Posts from './components/posts/containers/Posts'
import Users from './components/users/containers/Users'
import Appbar from './components/ui/Appbar'
import ContactForm from './components/users/containers/ContactForm'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['storePosts', 'storeUsers']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
// let store = createStore(persistedReducer)
const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware)
));
const persistor = persistStore(store)

// const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
//   applyMiddleware(...middleware)
// ));
// const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(()=> console.log(store.getState()));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Appbar />
          <ContactForm />
          <CounterContainer />
          <Posts />
          <Users />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

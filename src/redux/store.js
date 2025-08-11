import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

//import thunk from "redux-thunk" 

 import appReducer from './appReducer';
  import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//   const store = createStore(appReducer, composeEnhancers(applyMiddleware()));
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

const persistor = persistStore(store);

export { store, persistor };

// import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore } from 'redux-persist';

// import rootReducer from './rootReducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

// const persistor = persistStore(store);

// export { store, persistor };

import { createStore } from "redux";
import rootReducer from "./rootReducer";


export const store = createStore(
    rootReducer
);


// export default store;
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import cartReducer from './cart/cart.reducer';

// import cartReducer from './cartReducer';
import cartReducer2 from './cartReducer2';
import cartActionReducer from './cart/cartActionReducer';

const persistConfig = {
  key: 'quoality-guest',
  storage,
  whitelist: [''],
};

// const appReducer = combineReducers({
//   cart: cartReducer2,
// });

const appReducer = combineReducers({
  cart: cartActionReducer,
});

export default persistReducer(persistConfig, appReducer);

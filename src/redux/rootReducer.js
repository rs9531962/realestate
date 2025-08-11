import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//  import { cartReducer } from "./cartReducer"
 import { cartReducer } from "./cartReducer"
 import cartActionReducer from './cart/cartActionReducer';

const persistConfig = {
  key: 'quoality-guest',
  storage,
  whitelist: [''],
};

const rootReducer = combineReducers({
    cart:cartActionReducer
});

export default persistReducer(persistConfig, rootReducer);


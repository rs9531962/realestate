// src/reducers/cartReducerNew.js
import { FETCH_ITEMS_SUCCESS, FETCH_CART_SUCCESS } from './actions/cartActions';

const initialState = {
    items: [],
    cart: []
};

const cartReducer2 = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload
            };
        case FETCH_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload
            };
        default:
            return state;
    }
};

export default cartReducer2;

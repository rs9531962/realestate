// src/actions/cartActions.js
import axios from 'axios';

export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';

export const fetchItems = () => async dispatch => {
    const response = await axios.get('/api/items');
    dispatch({ type: FETCH_ITEMS_SUCCESS, payload: response.data });
};

export const fetchCart = (userId) => async dispatch => {
    const response = await axios.get(`/api/cart/${userId}`);
    dispatch({ type: FETCH_CART_SUCCESS, payload: response.data });
};

// export const addToCart = (userId, itemId) => async dispatch => {
//     await axios.post('/api/cart/add', { userId, itemId });
//     dispatch({ type: ADD_TO_CART_SUCCESS, payload: itemId });
//     dispatch(fetchCart(userId)); // Refresh cart
// };

export const addToCart = (userId, itemId) => async dispatch => {
    await axios.post('/api/cart/add', { userId, itemId });
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: itemId });
    dispatch(fetchCart(userId)); // Refresh cart
};

export const removeFromCart = (userId, itemId) => async dispatch => {
    await axios.post('/api/cart/remove', { userId, itemId });
    dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: itemId });
    dispatch(fetchCart(userId)); // Refresh cart
};

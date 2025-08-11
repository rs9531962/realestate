import { CartActionTypes } from './cartActionType';
import axios from 'axios'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';


// export const cartAddItem = (item) => ({
//   type: CartActionTypes.CART_ADD_ITEM,
//   payload: item,
// });

// export const cartAddItem = (userId , item) => ({
//   type: CartActionTypes.CART_ADD_ITEM,
//   payload: item,
// });

export const fetchCart = (userId) => {
  const response = axios.get(`/api/cart/${userId}`);
  return { type: FETCH_CART_SUCCESS, payload: response.data };
};

export const cartAddItem = (userId, item) => {
  //  axios.post('/api/cart/add', { userId, itemId });
  // axios.post('/api/cart/add', { userId, item });
  addProduct(userId, item);
  // fetchCart(userId);
  return {
    type: CartActionTypes.CART_ADD_ITEM,
    payload: item,
  }
}
// export const cartRemoveItem = (item) => ({
//   type: CartActionTypes.CART_REMOVE_ITEM,
//   payload: item,
// });


export const cartRemoveItem = (userId, item) => {
  // axios.post('/api/cart/remove', { userId, itemId });
  // axios.post('/api/cart/remove', { userId, item });
  // fetchCart(userId); // Refresh cart
  removeProduct(userId, item);
  return {
    type: CartActionTypes.CART_REMOVE_ITEM,
    payload: item,
  }
}

export const cartclearItem = (item) => ({
  type: CartActionTypes.CART_CLEAR_ITEM_FROM_CART,
  payload: item,
});

async function addProduct(userId, item) {
  try {
    const res = await axios.post(window.$urlpath2 + '/api/cart/add', {
      userId: userId,
      item: item
    })
    console.log(res)
    //setPCategoryValue(res.data.data)
  } catch (error) {
    console.log('Something is Wrong in addProduct API Call!!!')
    return;
  }

}


async function removeProduct(userId, item) {
  try {
    const res = await axios.post(window.$urlpath2 + '/api/cart/remove', {
      userId: userId
    })
    console.log(res)
    //setPCategoryValue(res.data.data)
  } catch (error) {
    console.log('Something is Wrong in removeProduct API Call!!!')
    return;
  }
}

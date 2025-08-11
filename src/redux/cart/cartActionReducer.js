import { CartActionTypes } from './cartActionType';
import { addItemToCart, removeItemFromCart } from './cartFunctions';

const INITIAL_STATE = {
   //cartItems: [{"id":2},{"id":3}]
    cartItems: []
};

const cartActionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

      case CartActionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CART_CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

      case CartActionTypes.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

      case CartActionTypes.FETCH_CART_SUCCESS:
        return {
          ...state,
          cartItems: action.payload,
        };

    default:
      return state;
  }
};

export default cartActionReducer;

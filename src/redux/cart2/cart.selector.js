import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems, selectCartItems],(cartItems, listItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

// const cartList = useSelector(state => state.cart.cartItems);

//   const cartCount = cartList.reduce(
//     (accumulatedQuantity, cartItem) =>
//       accumulatedQuantity + cartItem.quantity,
//     0
//   )

//   const cartTotal =  cartList.reduce(
//     (accumulatedQuantity, cartItem) =>
//       accumulatedQuantity + cartItem.quantity * cartItem.price,
//     0
//   )
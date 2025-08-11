import React from 'react';
import {useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import './styles.css';

const ButtonCartCount = () => {

  // // const cartCount= useSelector(state=>state)
   const cartList = useSelector(state => state.cart.cartItems);
  
    const cartCount = cartList.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity,
    0
  )

  // const cartTotal =  cartList.reduce(
  //   (accumulatedQuantity, cartItem) =>
  //     accumulatedQuantity + cartItem.quantity * cartItem.price,
  //   0
  // )

  //const cartCount=8;
  const history = useHistory();
  return (
    <div className='btnCartCount' onClick={() => history.push('/cart')}>
      <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
      <i class='fas fa-shopping-cart'></i>
    </div>
  );
};


export default ButtonCartCount;
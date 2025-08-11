import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartAddItem,
  cartRemoveItem,
} from '../../../../redux/cart/cartAction';

import {
  addToCart,
  removeFromCart,
} from '../../../../redux/actions/cartActions';

import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './styles.css';

const MenuItem = ({item,}) => {
  const { id, img, name, price, info } = item;

  const dispatch = useDispatch()

  const cartList = useSelector(state => state.cart.cartItems);

  const cartCount = cartList.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity,
    0
  )


  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  return (
    <>
    <div className='item'>
      <img src={img} alt='food' />
      <div className='item-head_desc'>
        <p className='head_desc-name'>{name}</p>
        <p className='head_desc-info'>
          <small>{info}</small>
        </p>
      </div>
      <div className='item-foot_desc'>
        <span className='foot_desc-price'>${price}</span>
        {/* <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => dispatch(removeFromCart(item))}
          handleAddItem={() => dispatch(addToCart(item))}
        /> */}
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => dispatch(removeFromCart("12345",item))}
          handleAddItem={() => dispatch(addToCart("12345",item))}
        />
      </div>
      </div>
      </>

      // handleRemoveItem={() => dispatch(cartRemoveItem(item))}
          // handleAddItem={() => dispatch(cartAddItem(item))}
  );
};


export default MenuItem;
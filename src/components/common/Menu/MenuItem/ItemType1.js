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

const ItemType1 = ({item,}) => {
 // const { id, img, name, price, info } = item;
 console.log("item : "+JSON.stringify(item))
  const { id, Img1, Sub_P_Name, MarketPrice, info } = item;

  const dispatch = useDispatch()

   const cartList = useSelector(state =>state.cart.cartItems);

  // const cartCount = cartList.reduce(
  //   (accumulatedQuantity, cartItem) =>
  //     accumulatedQuantity + cartItem.quantity,
  //   0
  // )

  // const cartList = [{
  //   "id" : 3 
  // }]

  const cartCount = cartList.length;
  let quantity = 0;
  let q;
  const handleQuantity = () => {
    // console.log(quantity +2)
    // let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }

    // quantity = i + 1
    // console.log(quantity);
    return quantity;
  };
  const shoot = (a) => {
    alert(a);
  }

  // return (
  //     <>
  //   <div className='item'>
  //     <img src={img} alt='food' />
  //     <div className='item-head_desc'>
  //       <p className='head_desc-name'>{name}</p>
  //       {/* <p className='head_desc-info'> */}
  //         {/* <small>{info}</small> */}
  //       {/* </p> */}
  //     </div>
  //     <div className='item-foot_desc'>
  //       <span className='foot_desc-price'>${price}</span>
  //        <ButtonAddRemoveItem
  //         quantity={handleQuantity()}
  //         handleRemoveItem={() => dispatch(cartRemoveItem(item))}
  //         handleAddItem={() => dispatch(cartAddItem(item))}
  //       /> 
  //         {/* <button onClick={() => shoot("Goal!")}>Take the shot!</button> */}
  //     </div>
  //     </div>
  //     </>
  // );

  const userId = "12345";

  return (
    <>
  <div className='item'>
    <img src={`http://localhost:4000/${Img1}`} alt='food' />
    <div className='item-head_desc'>
      <p className='head_desc-name'>{Sub_P_Name}</p>
      {/* <p className='head_desc-info'> */}
        {/* <small>{info}</small> */}
      {/* </p> */}
    </div>
    <div className='item-foot_desc'>
      <span className='foot_desc-price'>{MarketPrice}</span>
       {/* <ButtonAddRemoveItem
        quantity={handleQuantity()}
        handleRemoveItem={() => dispatch(cartRemoveItem(userId,item))}
        handleAddItem={() => dispatch(cartAddItem(userId,item))}
      />  */}

        {/* <ButtonAddRemoveItem
        quantity={handleQuantity()}
        handleRemoveItem={() => dispatch(removeFromCart("12345",item))}
        handleAddItem={() => dispatch(addToCart("12345",item))}
      /> */}

        {/* <button onClick={() => shoot("Goal!")}>Take the shot!</button> */}
    </div>
    </div>
    </>
);
};


export default ItemType1;
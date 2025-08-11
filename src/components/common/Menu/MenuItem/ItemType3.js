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

const ItemType3 = ({item,}) => {
  console.log("ItemType3 item : "+JSON.stringify(item))
 // const { id, img, name, price, info } = item;
  const { City, Product_Id, Product_Name,Description, Demand, Location } = item;
// Step 1: Clean keys and values
const cleaned = {};
  for (let key in item) {
  // Remove surrounding quotes from keys and values
  const cleanKey = key.replace(/^"|"$/g, '');
  const cleanValue = item[key].replace(/^"|"$/g, '');
  cleaned[cleanKey] = cleanValue;
}

  // Step 2: Log cleaned object
console.log('Cleaned Object:', cleaned);
  console.log("City : "+cleaned.City)
  console.log("Product_Id : "+cleaned.Product_Id)
  console.log("Product_Name : "+cleaned.Product_Name)
  console.log("Description : "+cleaned.Description)
  console.log("Demand : "+cleaned.Demand)
  console.log("Location : "+cleaned.Location)
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
    // if (cartCount !== 0) {
    //   const foundItemInCart = cartList.find((item) => item.id === id);
    //   if (foundItemInCart) {
    //     quantity = foundItemInCart.quantity;
    //   }
    // }

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
  const path1 = "productImages/292041/banner1.png";
  const path2 = "productImages/292041/banner1.png";
  return (
    <>
  <div className='item'>
    {/* <img src={`http://localhost:4000/${Img1}`} alt='food' /> */}
    <img src={`./productData/`+cleaned.Img1} alt='food' />
    {/* <img src={`./images/banner1.png`} alt='food' /> */}
    <p className='head_desc-name'>ID : {cleaned.Product_Id}</p>
    <div className='item-head_desc'>
      <p className='head_desc-name'>{cleaned.Product_Name}</p>
      
      {/* <p className='head_desc-info'> */}
        {/* <small>{info}</small> */}
      {/* </p> */}
    </div>
    <div className='item-head_desc'>{cleaned.Description}  {cleaned.Location} {cleaned.City}</div>
    <div className='item-foot_desc'>
      <span className='foot_desc-price'>{cleaned.Demand}</span>
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


export default ItemType3;
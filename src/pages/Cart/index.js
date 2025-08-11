import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../../components/Cart/EmptyCart';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu/indexMenu2';
import MenuItem from '../../components/common/Menu/MenuItem/index2';
import './styles.css';


const Cart = () => {

  // const cartList = useSelector(state => state.cart.cartItems);

  // const cartCount = cartList.reduce(
  //   (accumulatedQuantity, cartItem) =>
  //     accumulatedQuantity + cartItem.quantity,
  //   0
  // )

  // const cartTotal =  cartList.reduce(
  //   (accumulatedQuantity, cartItem) =>
  //     accumulatedQuantity + cartItem.quantity * cartItem.price,
  //   0
  // )
//   const cartList =0;

// const cartCount = 0;
const cartList = useSelector(state =>state.cart.cartItems);
const cartCount = cartList.length;
const cartTotal = cartList.length;
  
  // return (
  //   <>
  //     <div className='cart-header'>
  //       <Logo />
  //     </div>
  //     {cartCount === 0 ? (
  //       <EmptyCart />
  //     ) : (
  //       <div className='orders'>
  //         <h1 className='orders-heading'>Your Orders</h1>
  //         <div className='orders-menu'>
  //           <Menu list={cartList} />
  //         </div>
  //         <h3 className='orders-total'>Your Total ${cartTotal}</h3>
  //       </div>
  //     )}
  //     <Footer />
  //   </>
  // );

  return (
    <>
      <div className='cart-header'>
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu list={cartList} />
          </div>
          <h3 className='orders-total'>Your Total ${cartTotal}</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
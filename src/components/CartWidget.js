import React from 'react'

export const CartWidget = () => {
  return (
    <div className='cartWidget'>
    <img src={require("./imgs/shoppingcart.png")} height="40px" width="40px" alt="no hay img"></img>
    </div>
  );
}

export default CartWidget;
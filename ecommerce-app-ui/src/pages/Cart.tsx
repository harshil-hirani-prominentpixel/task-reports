import React from "react";

import CartEmpty from "../components/client/Cart/CartEmpty";


const Cart: React.FC = () => {
  const cartItems:[] = [];

  return (
    <div className='container mx-auto px-4 py-10'>
      <h1 className='text-2xl font-bold mb-6'>Cart</h1>

      {cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <div>
          <p>Cart items will go here...</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

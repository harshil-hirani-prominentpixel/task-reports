import React from "react";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 text-center'>
      <img
        src='/images/empty-cart.png'
        alt='Empty Cart'
        className='w-40 h-40 mb-6 opacity-70'
      />
      <h2 className='text-xl font-semibold mb-2'>Your cart is empty</h2>
      <p className='text-gray-500 mb-6'>
        Looks like you haven’t added anything to your cart yet.
      </p>
      <Link
        to='/shop'
        className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartEmpty;

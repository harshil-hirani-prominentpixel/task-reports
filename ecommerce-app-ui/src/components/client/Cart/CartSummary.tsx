import React from "react";

import type { CartSummaryProps } from "../../../types";

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  discount,
  shipping = "Free",
  total,
  onCheckout,
}) => {
  return (
    <div className='p-4 bg-white shadow rounded w-full md:w-80'>
      <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>

      <div className='space-y-2 text-sm'>
        <div className='flex justify-between'>
          <span>Subtotal</span>
          <span>₹ {subtotal}</span>
        </div>
        {discount && (
          <div className='flex justify-between text-blue-600'>
            <span>Discount</span>
            <span>- ₹ {discount}</span>
          </div>
        )}
        <div className='flex justify-between'>
          <span>Shipping</span>
          <span>{shipping}</span>
        </div>
        <hr />
        <div className='flex justify-between font-bold text-lg'>
          <span>Total</span>
          <span>₹ {total}</span>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className='w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700'
      >
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;

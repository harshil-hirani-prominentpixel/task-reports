import React from "react";

import type { CartItemProps } from "../../../types";

const CartItem: React.FC<CartItemProps> = ({
  id,
  image,
  title,
  price,
  oldPrice,
  quantity,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className='flex items-center gap-4 py-4 border-b'>
      <img src={image} alt={title} className='w-20 h-20 object-contain' />

      <div className='flex-1'>
        <h3 className='font-semibold'>{title}</h3>
        {id && <p className='text-sm text-gray-500'>ProductId: {id}</p>}

        <div className='flex items-center mt-2 space-x-2'>
          <button
            onClick={() => quantity === 1 ?  onRemove() : onQuantityChange(quantity - 1)}
            className='px-2 border rounded'
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className='px-2 border rounded'
          >
            +
          </button>
        </div>

        <button
          onClick={onRemove}
          className='text-red-500 text-sm mt-2 underline'
        >
          Remove
        </button>
      </div>

      <div className='text-right'>
        {oldPrice && (
          <p className='line-through text-gray-400 text-sm'>₹ {oldPrice}</p>
        )}
        <p className='font-bold'>₹ {price}</p>
      </div>
    </div>
  );
};

export default CartItem;

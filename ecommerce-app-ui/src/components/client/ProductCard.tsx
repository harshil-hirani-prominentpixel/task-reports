import React from "react";
import { Star } from "lucide-react";

import type { ProductCardProps } from "../../types";


const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  subtitle,
  price,
  oldPrice,
  rating,
  reviews,
  isNew = false,
}) => {
  return (
    <div className='bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition'>
      <div className='relative'>
        {isNew && (
          <span className='absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded'>
            New
          </span>
        )}
        <img
          src={image}
          alt={title}
          className='w-full h-40 object-contain mb-3'
        />
      </div>

      <h3 className='text-sm font-semibold line-clamp-1'>{title}</h3>
      <p className='text-xs text-gray-500 mb-2'>{subtitle}</p>

      <div className='flex items-center space-x-2 mb-2'>
        <span className='text-lg font-bold text-blue-600'>
          ₹ {price.toLocaleString()}
        </span>
        {oldPrice && (
          <span className='text-sm line-through text-gray-400'>
            ₹ {oldPrice.toLocaleString()}
          </span>
        )}
      </div>

      <div className='flex items-center text-yellow-500 text-sm mb-3'>
        <Star className='w-4 h-4 fill-current' />
        <span className='ml-1 font-medium'>{rating.toFixed(1)}</span>
        <span className='ml-1 text-gray-500'>({reviews})</span>
      </div>

      <button className='text-xs text-white border border-gray-500 rounded-md py-1 bg-black hover:bg-blue-500' >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

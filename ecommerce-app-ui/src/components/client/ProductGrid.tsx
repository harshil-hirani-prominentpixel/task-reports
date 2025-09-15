import React from "react";

import ProductCard from './ProductCard';
import data from "../../data/data";

const ProductGrid: React.FC = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6'>
      {data.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;

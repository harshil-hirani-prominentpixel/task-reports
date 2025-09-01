import React, { useState, type ChangeEvent } from "react";
import "./ProductList.css";

export type Product = {
  id: number;
  name: string;
  price: number;
};

interface ProductListProps {
  products?: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products = [] }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='product-list-container'>
      <h2>Product List</h2>

      <input
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={handleSearch}
        className='search-input'
      />

      {filteredProducts.length > 0 ? (
        <ul className='product-list'>
          {filteredProducts.map((product) => (
            <li key={product.id} className='product-item'>
              <span className='product-name'>{product.name}</span> - ₹
              {product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p className='no-results'>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;

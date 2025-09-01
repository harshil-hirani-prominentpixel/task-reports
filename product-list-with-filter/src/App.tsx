import React from "react";
import ProductList from "./components/ProductList/ProductList";
import { products } from "./data/products";

const App: React.FC = () => {
  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;

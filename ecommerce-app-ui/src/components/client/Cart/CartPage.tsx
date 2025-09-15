import React, { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/images/dac-holster.png",
      title: "Headphone Zone - DAC Holster",
      color: "Black",
      price: 2396,
      oldPrice: 2796,
      quantity: 4,
    },
  ]);

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, newQty: number) => {
    if (newQty < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onRemove={() => handleRemove(item.id)}
            onQuantityChange={(qty) => handleQuantityChange(item.id, qty)}
          />
        ))}
      </div>

      <CartSummary
        subtotal={subtotal}
        discount={400}
        shipping="Free"
        total={subtotal - 400}
        onCheckout={() => alert("Proceeding to checkout...")}
      />
    </div>
  );
};

export default CartPage;

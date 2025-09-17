import React from "react";

import { useCart } from "../context/CartContext";
import CartEmpty from "../components/client/Cart/CartEmpty";
import CartItem from "../components/client/Cart/CartItem";
import CartSummary from "../components/client/Cart/CartSummary";


const Cart: React.FC = () => {

  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className='container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6'>

      {cartItems.length === 0 ? (
        <div className='md:col-span-3'>
          <CartEmpty />
        </div>
      ) : (
        <>
          <div className='md:col-span-2 bg-white p-4 rounded shadow'>
            <h1 className='text-2xl font-bold mb-4'>Cart</h1>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onRemove={() => removeFromCart(item.id)}
                onQuantityChange={(quantity: number) => updateQuantity(item.id, quantity)}
              />
            ))}
          </div>

          <CartSummary
            subtotal={subtotal}
            discount={400}
            shipping='Free'
            total={subtotal - 400}
            onCheckout={() => alert("Proceeding to checkout...")}
          />
        </>
      )}

    </div>
  );
};

export default Cart;

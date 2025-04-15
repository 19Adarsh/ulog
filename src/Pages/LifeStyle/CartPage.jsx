import React from 'react';
import { useCart } from './../CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;

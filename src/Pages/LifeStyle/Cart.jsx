import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartWithProducts = async () => {
      try {
        // Step 1: Fetch carts
        const cartResponse = await fetch('https://fakestoreapi.com/carts/1');
        const cartData = await cartResponse.json();

        const productsInCart = cartData.products;

        // Step 2: Fetch product details for each item
        const productDetails = await Promise.all(
          productsInCart.map(async (item) => {
            const res = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
            const data = await res.json();
            return {
              ...data,
              quantity: item.quantity,
              total: item.quantity * data.price,
            };
          })
        );

        setCartItems(productDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    };

    fetchCartWithProducts();
  }, []);

  if (loading) return <p>Loading cart...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
          <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
          <h4>{item.title}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p><strong>Total: ${item.total.toFixed(2)}</strong></p>
        </div>
      ))}
    </div>
  );
};

export default Cart;

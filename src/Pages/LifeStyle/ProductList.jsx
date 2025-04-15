import React, { useEffect, useState } from 'react';
import { useCart } from './../CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart, isInCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>
      <p>🛒 Cart Items: {cartItems.length}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            {isInCart(product.id) ? (
              <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            ) : (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;


// import React, { useEffect, useState } from 'react';
// import { useCart } from '../Pages/CartContext';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const { cartItems, addToCart, removeFromCart, isInCart } = useCart();

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products)) 
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);
  

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Product List</h2>
//       <p>🛒 Cart Items: {cartItems.length}</p>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//         {products.map((product) => (
//           <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
//             <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
//             <h4>{product.title}</h4>
//             <p>${product.price}</p>
//             {isInCart(product.id) ? (
//               <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
//             ) : (
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

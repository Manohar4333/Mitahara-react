import React, { useEffect, useState } from 'react';
import { getCart, removeFromCart, addToCart } from '../services/cartService';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getCart(token);
        setCart(data.cart || []);
      } catch (err) {
        setError('Failed to load cart');
      }
      setLoading(false);
    };
    fetchCart();
  }, [token]);

  const handleRemove = async (id) => {
    // id may be object, use _id if available
    const realId = typeof id === 'object' && id._id ? id._id : id;
    try {
      await removeFromCart(realId, token);
      // Refetch cart after update to ensure only one item is removed
      const data = await getCart(token);
      setCart(data.cart || []);
    } catch {
      setError('Failed to remove item');
    }
  };

  if (!token) {
    return <div className="cart-container"><p>Please login to view your cart.</p></div>;
  }

  // Calculate total billing
  const total = cart.reduce((sum, item) => {
    // If item.price is not present, treat as 0
    return sum + (item.price ? item.price * item.quantity : 0);
  }, 0);

  // Update quantity handler
  const handleUpdateQty = async (id, newQty) => {
    if (newQty < 1) return;
    const realId = typeof id === 'object' && id._id ? id._id : id;
    try {
      await addToCart(realId, 1, token); // backend increments by 1 per call
      // Refetch cart after update
      const data = await getCart(token);
      setCart(data.cart || []);
    } catch {
      setError('Failed to update quantity');
    }
  };

  // Remove one quantity, not all
  const handleDecreaseQty = async (id, currentQty) => {
    if (currentQty <= 1) return;
    const realId = typeof id === 'object' && id._id ? id._id : id;
    try {
      // Remove one quantity by calling addToCart with negative quantity if backend supports, else custom endpoint needed
      await addToCart(realId, -1, token); // If backend supports negative quantity
      const data = await getCart(token);
      setCart(data.cart || []);
    } catch {
      setError('Failed to decrease quantity');
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {loading ? (
        <div className="cart-loading">Loading...</div>
      ) : error ? (
        <div className="cart-error">{error}</div>
      ) : cart.length === 0 ? (
        <div className="cart-empty">Your cart is empty.</div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, idx) => {
              // If backend populates product, item.id is the product object
              const product = item.id || {};
              // If multiple items have same product._id, append index for uniqueness
              let key = product._id || item._id || (typeof item.id === 'string' ? item.id : JSON.stringify(item.id));
              if (cart.filter((i) => (i.id?._id || i._id) === product._id).length > 1) {
                key = `${key}-${idx}`;
              }
              return (
                <li key={key} className="cart-item">
                  <div className="cart-img-box">
                    {product.imageURL && (
                      <img src={product.imageURL} alt={product.productName} className="cart-img" />
                    )}
                  </div>
                  <div className="cart-details">
                    <span className="cart-product">{product.productName || key}</span>
                    {product.price && (
                      <span className="cart-price">₹{product.price}</span>
                    )}
                    <div className="cart-qty-controls">
                      <button className="qty-btn" onClick={() => handleDecreaseQty(product._id, item.quantity)}>-</button>
                      <span className="cart-qty">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => handleUpdateQty(product._id, item.quantity + 1)}>+</button>
                    </div>
                    <span className="cart-date">Added: {new Date(item.addedAt).toLocaleDateString()}</span>
                  </div>
                  <button className="cart-remove" onClick={() => handleRemove(product._id)}>Remove</button>
                </li>
              );
            })}
          </ul>
          <div className="cart-total">
            <span>Total Bill:</span>
            <span className="cart-total-amount">₹{
              cart.reduce((sum, item) => {
                const product = item.id || {};
                return sum + (product.price ? product.price * item.quantity : 0);
              }, 0).toFixed(2)
            }</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

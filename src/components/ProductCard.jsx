import { useState } from 'react';
import { addToCart } from '../services/cartService';

const ProductCard = ({product}) => {
    const [adding, setAdding] = useState(false);
    const [msg, setMsg] = useState('');
    const [quantity, setQuantity] = useState(1);
    const token = localStorage.getItem('token');

    const handleAddToCart = async () => {
        if (!token) {
            setMsg('Please login to add to cart');
            return;
        }
        if (quantity < 1) {
            setMsg('Quantity must be at least 1');
            return;
        }
        setAdding(true);
        setMsg('');
        try {
            await addToCart(product._id, quantity, token);
            setMsg(`Added ${quantity} to cart!`);
        } catch (err) {
            setMsg('Failed to add to cart');
        }
        setAdding(false);
    };

    return (
        <div className="product-card">
            <img className="card-omg-top" src={product.imageURL} alt="image of a food item" />
            <div className="product-info">
                <h5 className="product-name">{product.productName}</h5>
                <p className="product-description">{product.description}</p>
                <h4 className="product-price">₹{product.price}</h4>
                <div className="cart-qty-input">
                    <label htmlFor={`qty-${product._id}`}>Qty:</label>
                    <input
                        id={`qty-${product._id}`}
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                        style={{ width: '60px', marginLeft: '8px' }}
                    />
                </div>
                <button className="add-cart-btn" onClick={handleAddToCart} disabled={adding}>
                    {adding ? 'Adding...' : 'Add to Cart'}
                </button>
                {msg && <div className="add-cart-msg">{msg}</div>}
            </div>
        </div>
    );
}

export default ProductCard;
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  // State for controlling the popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Handle showing and hiding the popup
  const handleProceedToCheckout = () => {
    setIsPopupVisible(true);
    setTimeout(() => setIsPopupVisible(false), 3000); // Auto close popup after 3 seconds
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>My Cart</h2>
      </div>

      {/* Cart Items List */}
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item))}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty. Start adding items to your cart!</p>
        )}
      </div>

      {/* Total Price */}
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}

      {/* Checkout Button */}
      <div className="cart-actions">
        {cart.length > 0 ? (
          <button className="checkout-btn" onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </button>
        ) : (
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        )}
      </div>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="popup-modal">
          <div className="popup-content">
            <h3>Enjoy your shopping!</h3>
            <p>Your items are ready for checkout. Let's make your purchase!</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Cart;

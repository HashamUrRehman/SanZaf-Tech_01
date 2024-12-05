import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <p>Complete your purchase by filling in your shipping details below.</p>
      </div>

      {/* Shipping Form */}
      <div className="shipping-form">
        <h2>Shipping Information</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Shipping Address</label>
            <input type="text" id="address" placeholder="Enter your shipping address" required />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Enter your city" required />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" id="postalCode" placeholder="Enter your postal code" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Enter your phone number" required />
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="order-item">
              <img src={item.image} alt={item.name} className="order-item-image" />
              <div className="order-item-details">
                <p className="order-item-name">{item.name}</p>
                <p className="order-item-price">${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="order-total">
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="payment-method">
        <h2>Payment Method</h2>
        <select id="paymentMethod">
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      {/* Place Order Button */}
      <div className="place-order">
        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;

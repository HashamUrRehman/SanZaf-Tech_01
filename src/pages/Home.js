import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <section className="hero">
      <h2>Welcome to our E-Commerce Store!</h2>
      <p>Your one-stop shop for the best deals and quality products.</p>
      <Link to="/products" className="shop-now-button">
        Shop Now
      </Link>
    </section>

    <section className="features">
      <h3>Why Shop With Us?</h3>
      <div className="feature-cards">
        <div className="feature-card">
          <h4>Exclusive Offers</h4>
          <p>Enjoy discounts and deals you won't find anywhere else.</p>
        </div>
        <div className="feature-card">
          <h4>Wide Range of Products</h4>
          <p>From electronics to fashion, find everything you need in one place.</p>
        </div>
        <div className="feature-card">
          <h4>Fast Delivery</h4>
          <p>Get your orders delivered to your doorstep in no time.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Home;

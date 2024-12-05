import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState('all'); // Filter state (example: category)

  const filteredProducts = products.filter((product) =>
    filter === 'all' ? true : product.category === filter
  );

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Featured Products</h2>

      {/* Filter options */}
      <div className="product-filter">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>

      {/* Product list */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;

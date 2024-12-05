import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Product A', price: 30, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product B', price: 20, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product C', price: 50, image: 'https://via.placeholder.com/150' },
];

const Products = () => <ProductList products={products} />;

export default Products;

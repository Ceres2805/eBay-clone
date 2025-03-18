import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { image: '/images/product1.jpg', title: 'Product 1', price: '29.99' },
  { image: '/images/product2.jpg', title: 'Product 2', price: '49.99' },
  { image: '/images/product3.jpg', title: 'Product 3', price: '19.99' },
];

const ProductGrid = () => {
  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </section>
  );
};

export default ProductGrid;

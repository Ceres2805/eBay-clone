import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans bg-gray-100">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default App;

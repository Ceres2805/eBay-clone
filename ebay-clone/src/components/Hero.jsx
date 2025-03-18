import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to eBay</h1>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-700">${price}</p>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

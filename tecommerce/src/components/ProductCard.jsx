import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      <img src={product.image} alt={product.title} className="h-48 object-contain p-4 bg-gray-100" />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-blue-500 font-bold mt-2">${product.price.toFixed(2)}</p>
      </div>
      <div className="p-4 bg-gray-50">
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-md hover:from-indigo-500 hover:to-blue-500"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

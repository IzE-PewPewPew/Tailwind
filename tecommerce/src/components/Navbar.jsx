import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Tailwind Store</h1>
        <div>
          <button className="text-white font-medium relative">
            Cart
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

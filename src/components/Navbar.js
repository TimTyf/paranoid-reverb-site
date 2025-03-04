import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 p-4 rounded-lg shadow-lg z-50">
      <ul className="flex space-x-6">
        <li><a href="#home" className="text-white hover:text-green-500">Home</a></li>
        <li><a href="#music" className="text-white hover:text-green-500">Music</a></li>
        <li><a href="#merch" className="text-white hover:text-green-500">Merch</a></li>
        <li><a href="#about" className="text-white hover:text-green-500">About</a></li>
        <li><a href="#contact" className="text-white hover:text-green-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

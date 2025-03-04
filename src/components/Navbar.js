import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black bg-opacity-80 p-4 fixed top-0 w-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#228B22]">Paranoid Reverb</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-[#228B22]">Home</Link>
          <Link to="/music" className="text-white hover:text-[#228B22]">Music</Link>
          <Link to="/merch" className="text-white hover:text-[#228B22]">Merch</Link>
          <Link to="/about" className="text-white hover:text-[#228B22]">About</Link>
          <Link to="/contact" className="text-white hover:text-[#228B22]">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

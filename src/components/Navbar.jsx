// src/components/Navbar.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/hitlogo.png';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-1">
      <div className="container mx-auto flex justify-between items-center">
        <img src = {logo} alt = "logo" className="w-16 h-16 rounded-full mb-4"/>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
          <a href="/login" className="hover:text-gray-300">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

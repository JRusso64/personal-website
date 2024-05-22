"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a className="text-white text-lg font-bold">Portfolio</a>
        </div>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/resume">Resume</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className="text-white hover:text-gray-300 block md:inline-block">{children}</a>
    </Link>
  );
};

export default Navbar;
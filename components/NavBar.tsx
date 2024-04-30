import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link legacyBehavior href="/">
            <a className="text-white text-lg font-bold">My Portfolio</a>
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
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
      <a className="text-white hover:text-gray-300">{children}</a>
    </Link>
  );
};

export default Navbar;

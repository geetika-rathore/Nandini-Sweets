import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 py-4 fixed top-9 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl">Nandini Sweets</div>
        </div>
        <nav className="md:block hidden">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/menu" className="text-white hover:text-gray-300" onClick={closeMenu}>Menu</Link>
            </li>
            <li>
              <AnchorLink href="/contact" className="text-white hover:text-gray-300" onClick={closeMenu}>Contact</AnchorLink>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/gtpgHQMPF337qYn28" className="text-white hover:text-gray-300" onClick={closeMenu}>Location</a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden block">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M0 3a2 2 0 012-2h16a2 2 0 012 2v1a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm0 6a2 2 0 012-2h16a2 2 0 012 2v1a2 2 0 01-2 2H2a2 2 0 01-2-2V9zm0 6a2 2 0 012-2h16a2 2 0 012 2v1a2 2 0 01-2 2H2a2 2 0 01-2-2v-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center">
            <li>
              <Link to="/" className="block text-white py-2 hover:text-gray-300" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/menu" className="block text-white py-2 hover:text-gray-300" onClick={closeMenu}>Menu</Link>
            </li>
            <li>
              <a href="tel:9415715361,6387270799" className="block text-white py-2 hover:text-gray-300" onClick={closeMenu}>Contact</a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/gtpgHQMPF337qYn28" className="block text-white py-2 hover:text-gray-300" onClick={closeMenu}>Location</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

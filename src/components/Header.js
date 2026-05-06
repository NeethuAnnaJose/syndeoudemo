import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <img src="/lrnsylogo.png" alt="Lrnsy" className="logo-image" />
            {/* <span className="logo-tagline">CONNECTING THE DOTS</span> */}
          </div>
          <nav className="nav-menu">
            <a href="#why" className="nav-link">Why Lrnsy Exists</a>
            <a href="#system" className="nav-link">System</a>
            <a href="#integration" className="nav-link">Integration Levels</a>
            <a href="#research" className="nav-link">Research and Evidence</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
        <div className="header-right">
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#why" className="mobile-nav-link">Why Lrnsy Exists</a>
          <a href="#system" className="mobile-nav-link">System</a>
          <a href="#integration" className="mobile-nav-link">Integration Levels</a>
          <a href="#research" className="mobile-nav-link">Research and Evidence</a>
          <a href="#faq" className="mobile-nav-link">FAQ</a>
          <a href="#contact" className="mobile-nav-link">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;

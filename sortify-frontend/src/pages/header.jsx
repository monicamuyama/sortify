import React, { useState } from "react";
import "../styles/header.css"; // Add this CSS file for styling

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Sortify</div>
      <nav className={`nav-links ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
        <a href="home">Home</a>
        <a href="about">About</a>
        <a href="pattern">Pattern</a>
        <a href="donate">Donate</a>
        <a href="leaderboard">Leaderboard</a>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;

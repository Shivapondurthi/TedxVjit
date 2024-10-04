import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ onSectionChange }) => {
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${navBackground ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src="./vjitmedia/TEDxVJIT_Navbar_About.png" alt="Tedx" />

        </div>

        {/* Menu Items */}
        <ul className="navbar-links">
          <li><a href="#home" onClick={() => onSectionChange("home")}>Home</a></li>
          <li><a href="#teams" onClick={() => onSectionChange("teams")}>Team</a></li>
          <li><a href="#speakers" onClick={() => onSectionChange("speakers")}>Speakers</a></li>
          <li><a href="#contact" onClick={() => onSectionChange("contact")}>Contact Us</a></li>
          <li><a href="#aboutus" onClick={() => onSectionChange("about")}>About Us</a></li>
        </ul>

        {/* Get Tickets Button */}
        <div className="navbar-button">
          <a href="#tickets" className="get-tickets-btn" onClick={() => onSectionChange("tickets")}>Get Tickets</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

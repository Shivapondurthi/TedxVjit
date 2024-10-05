import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ onSectionChange }) => {
  const [navBackground, setNavBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control hamburger menu

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open state
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
          <img src="vjitmedia/TEDxVJIT_Navbar_About.png" alt="Tedx" />
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu Items */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={() => {
                onSectionChange("home");
                setMenuOpen(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#teams"
              onClick={() => {
                onSectionChange("teams");
                setMenuOpen(false);
              }}
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#speakers"
              onClick={() => {
                onSectionChange("speakers");
                setMenuOpen(false);
              }}
            >
              Speakers
            </a>
          </li>
          <li>
            <a
              href="#contactus"
              onClick={() => {
                onSectionChange("contactus");
                setMenuOpen(false);
              }}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => {
                onSectionChange("about");
                setMenuOpen(false);
              }}
            >
              About Us
            </a>
          </li>
        </ul>

        {/* Get Tickets Button */}
        <div className="navbar-button">
          <a
            href="#tickets"
            className="get-tickets-btn"
            onClick={() => {
              onSectionChange("tickets");
              setMenuOpen(false);
            }}
          >
            Get Tickets
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

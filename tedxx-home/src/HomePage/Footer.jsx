import React from "react";
import "./Footer.css"; 

const Footer = ({onSectionChange}) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo and Links */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/vjitmedia/TEDxVJIT_Navbar_About.png" alt="" />
          </div>
          <ul className="footer-links">
            <li onClick={() => onSectionChange("team")}>Team</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Middle Section - Social Links */}
        <div className="footer-section">
          <h3>Let's <span>Connect</span></h3>
          <ul className="footer-social">
            <li className="hover:text-red-600"><i className="fab fa-youtube"></i> Youtube</li>
            <li className="hover:text-blue-600"><i className="fab fa-linkedin"></i> Linkedin</li>
            <li className="hover:text-pink-600"><i className="fab fa-instagram"></i> Instagram</li>
            <li className="hover:text-blue-400"><i className="fab fa-twitter"></i> Twitter</li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-section ">
          <h3>Contact Us</h3>
          <p className="hover:text-red-600"><i className="fas fa-envelope"></i> tedxvjit@vjit.ac.in</p>
          <p className="hover:text-red-600"><i className="fas fa-phone"></i> +91 9866487922</p>
          <p className="hover:text-red-600"><i className="fas fa-phone"></i>+91 8121403233</p>
          <p className="hover:text-red-600"><i className="fas fa-phone"></i>+91 8106993270</p>
        </div>
      </div>

      <div className="footer-bottom text-red-600">
        <p>Copyright © 2024 - TEDxVJIT. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
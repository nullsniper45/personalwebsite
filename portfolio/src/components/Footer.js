import React from 'react';
import '../css/Footer.css'; // Importing your custom styles
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

const Footer = ({darkMode, setDarkMode}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bottom container-fluid bg-${
          darkMode ? "bg-dark text-light" : "bg-light text-dark"
        } custom-footer py-4 px-4 px-md-5`}>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        {/* Social Links */}
        <div className="d-flex gap-4 mb-3 mb-md-0">
          <a href="https://www.facebook.com/DureddySainitheeshreddy" className="footer-link text-decoration-none" target='_blank' rel="noreferrer"><SiFacebook/></a>
          <a href="https://www.instagram.com/sainitheesh45" className="footer-link text-decoration-none" target='_blank' rel="noreferrer"><SiInstagram /></a>
          <a href="https://www.linkedin.com/in/sainitheesh-reddy-57b11b1a3/?skipRedirect=true" className="footer-link text-decoration-none" target='_blank' rel="noreferrer"><SiLinkedin /></a>
          <a href="https://www.github.com/nullsniper45" className="footer-link text-decoration-none" target='_blank' rel="noreferrer"><SiGithub /></a>
        </div>

        {/* Copyright Information */}
        <div className="copyright-text">
          © {currentYear} Sainitheesh Reddy. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
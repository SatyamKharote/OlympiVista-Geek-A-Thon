import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} OlympiVista. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

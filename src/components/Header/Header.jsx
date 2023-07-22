import React from "react";
import "./Header.css"
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="Logo" width={100} />
        <div className="flexCenter h-menu">
            <a href="" className="button">Login</a>
            <a href="">About Us</a>
            <a href="">Developer</a>
        </div>
      </div>
    </section>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const navigate = useNavigate();
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <a href="" onClick={() => navigate("/")} className="logo">
          <img src="./logo.png" alt="Logo" width={100} />
        </a>
      </div>
    </section>
  );
};

export default Header;

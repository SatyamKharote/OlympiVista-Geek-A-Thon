import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const navigate = useNavigate();
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  const handleDeveloperClick = () => {
    navigate("/Developer"); // Redirect to the Developer page when clicked
  };
  const handleAboutusClick = () => {
    navigate("/Aboutus"); // Redirect to the Developer page when clicked
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="Logo" width={100} />

        <OutsideClickHandler onOutsideClick={()=>{
          setMenuOpened(false)
        }}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <button className="button" onClick={handleAboutusClick}>
              About Us
            </button>
            <button className="button" onClick={handleDeveloperClick}>
              Developer
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon">
          <BiMenuAltRight
            size={30}
            onClick={() => setMenuOpened((prev) => !prev)}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;

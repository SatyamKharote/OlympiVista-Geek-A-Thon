import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="Logo" width={100} />

        <OutsideClickHandler onOutsideClick={()=>{
          setMenuOpened(false)
        }}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="" className="button">About Us</a>
            <a href="">Developer</a>
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

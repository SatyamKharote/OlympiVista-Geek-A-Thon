import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import Explore from "../Explore/Explore";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* Left Side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <h1>
                Unleashing
                <br /> Olympic
                <br /> Insights
              </h1>
            </div>
            <div className="flexColStart hero-desc">
              <span className="secondaryText">
                Experience the thrill of the Olympic Games by logging in
                <br /> and accessing exclusive content about your favorite
                events and athletes.
              </span>
              <br />
              <div>
                <button className="button" onClick={() => navigate("/Explore")}>
                  Explore
                </button>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="./bg2.svg" alt="Loading Image.." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

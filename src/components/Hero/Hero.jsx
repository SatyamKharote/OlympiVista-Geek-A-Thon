import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
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
              <br /> and accessing exclusive content about your favorite events
              and athletes.
            </span><br/>
            <button className="button">Explore</button>
          </div>
          
        </div>
        {/* Right Side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./bg3.svg" alt="Loading Image.." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
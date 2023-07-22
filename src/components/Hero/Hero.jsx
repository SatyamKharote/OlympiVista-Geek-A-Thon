import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>
            <div className="hero-left">
                Left Section
            </div>
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./olympic.jpg" alt="Loading Image.." />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero

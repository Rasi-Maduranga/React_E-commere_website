import React from 'react'
import './Hero.css'
import hero_img from '../Assets/image2.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>M MOBILE</h2>
        <p>Collection</p>
        <p>For everyone</p>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero

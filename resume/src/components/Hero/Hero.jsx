import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from '../../assets/profile.jpg'
import './Hero.css'
const Hero = () => {
  return (
    <section className='main-hero'>
      <div className='profile'>
        <img src={profile} alt="profile" />
      </div>
      <div className="profile-text">
        <p>Hello, I'm</p>
        <h2>vivek chadhuvula</h2>
        <h4>Web developer </h4>
        <div className='btn'>
          <button className='hire'>Hire Me</button>
          <button className='resume'>Resume</button>

        </div>
        <div className='link'>
          <a><FaGithub /></a>
          <a><FaLinkedin /></a>
        </div>
      </div>

    </section>
  )
}

export default Hero

import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from '../../assets/profile.jpg'
import './Hero.css'
const Hero = () => {
  return (
    <>
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
          <a href='https://github.com/vivekchadhuvula01' target='_blank'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/vivek-chadhuvula/' target='_blank'><FaLinkedin /></a>
        </div>
      </div>

      </section>

    </>
  )
}

export default Hero

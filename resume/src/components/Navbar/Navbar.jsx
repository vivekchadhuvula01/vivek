import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" />
            <ul >
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact me</li>
            </ul>

        </nav>
    )
}

export default Navbar

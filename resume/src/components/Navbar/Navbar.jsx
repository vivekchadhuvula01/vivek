import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'
// import { IoMenu } from "react-icons/io5";
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <>
        <nav className='nav-large'>
            <img src={logo} alt="logo" />
            <ul >

                <li>
                    <Link className='link' to={'#about'}>About</Link>
                </li>

                <li>
                    <Link className='link' to={'#projects'}>Projects</Link>
                </li>

                <li>
                    <Link className='link' to={'#skills'}>Skills</Link>
                </li>

                <li>
                    <Link className='link' to={'#contact'}>Contact me</Link>
                </li>

            </ul>

            </nav>
            <nav className='mobile'>
            {/* `    <IoMenu fontSize={'2rem'} />` */}
                
            </nav>    
        </>
    )
}

export default Navbar

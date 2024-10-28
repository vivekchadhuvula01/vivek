import React from 'react'
import './Contact.css'
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
    return (
        <>
            <section id='contact' className='main-body'>
                <h2>Contact </h2>
                <span className='line'></span>
            </section>
            <section className='main'>
                <p className='text'>Find me on the following Platform</p>
            </section>
            <div className='details'>
                <section className='detail-box-contact'>
                    <IoMdMail fontSize={'1.3rem'} />
                    <a href="mailto:vivekchadhuvula@gmail.com">vivekchadhuvula@gmail.com</a>
                </section>
                <section className='detail-box-contact'>
                    <FaLinkedin fontSize={'1.3rem'} />
                    <a href="https://www.linkedin.com/in/vivek-chadhuvula/" target='_blank'>Linkedin</a>
                </section>
            </div>
        </>
    )
}

export default Contact

import React from 'react'
import './About.css'
import { GiGraduateCap } from "react-icons/gi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const About = () => {
    return (
        <>
            <section id='about' className='main-body'>
                <h2>About </h2>
                <span className='line'></span>
            </section>

            <div className='details'>
                <section className='detail-box'>
                    <h3>Graduation <GiGraduateCap fontSize={'2.5rem'} /></h3>
                    <h4>Bachelor of Technology 2022-25</h4>
                    <h4>Diploma  2019-22</h4>
                </section>
                <section className='detail-box'>
                    <h3>Experience <RiVerifiedBadgeFill fontSize={'2.5rem'} /></h3>
                    <h4>Motion Cut - AICTE</h4>
                    <h4>Web Development Intern </h4>
                </section>
            </div>
            <section className='main'>
                <p>Hey there! I'm, a passionate web developer with a knack for turning ideas into digital realities. With a Bachelor's degree in Electrical and Electronics Engineering from Anurag University Hyderabad, I've got a solid foundation in technical concepts and problem-solving. I'm skilled in Node.js, React.js, Express.js, and Tailwind CSS, and I love using these tools to create efficient, user-friendly, and visually stunning web applications. I'm a quick learner and always eager to explore new technologies. My recent internship at AICTE gave me valuable hands-on experience in web development and helped me solidify my skills. I'm excited to continue growing as a developer and contribute my expertise to exciting projects. </p>
            </section>
        </>
    )
}

export default About

import React from 'react'
import './About.css'
import { GiGraduateCap } from "react-icons/gi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const About = () => {
    return (
        <>
            <section className='main-body'>
                <h2>About </h2>
                <span className='line'></span>
            </section>

            <div className='details'>
                <section className='detail-box'>
                    <h4>education <GiGraduateCap /></h4>
                    <p>Bachelor's 2022-2025</p>
                    <p>Diploma  2019-2022</p>
                </section>
                <section className='detail-box'>
                    <h4>Internship <RiVerifiedBadgeFill /></h4>
                    <p>Bachelor's 2022-2025</p>
                    <p>Diploma  2019-2022</p>
                </section>
            </div>
        </>
    )
}

export default About

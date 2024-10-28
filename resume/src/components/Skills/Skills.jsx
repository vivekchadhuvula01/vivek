import React from 'react'
import './SKills.css'
import { MdVerified } from "react-icons/md";

const Skills = () => {
    return (
        <>
            <section id='skills' className='main-body-skills'>
                <h2>SKills </h2>
                <span className='line'></span>
            </section>
            <div className='details-skills'>
                <section className='detail-box-skills'>
                    <h3>Web Technologies </h3>
                    <div className='skills'>
                        <li className='skill-item'><MdVerified fontSize={'1.1rem'} /> HTML</li>
                        <li className='skill-item'><MdVerified fontSize={'1.1rem'} />CSS</li>
                        <li className='skill-item'><MdVerified fontSize={'1.1rem'} />JavaScript</li>
                        <li className='skill-item'><MdVerified fontSize={'1.1rem'} />ReactJs</li>
                        <li className='skill-item'><MdVerified fontSize={'1.1rem'} />TailwindCSS</li>
                        <li className='skill-item'><MdVerified fontSize={'1.1rem'} />Git & Github</li>
                        <li className='skill-item'><MdVerified fontSize={'1.1rem'} />NodeJs</li>
                        <li className='skill-item'><MdVerified fontSize={'1.1rem'} />ExpressJs</li>
                        <li className='skill-item'><MdVerified fontSize={'1.1rem'} />MongoDB</li>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Skills

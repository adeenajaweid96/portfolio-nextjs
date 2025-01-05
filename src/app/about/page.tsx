import React from 'react'
import Image from 'next/image'
import about from "../../../public/about-image.webp";

const About = () => {
    return (
        <div className='flex flex-wrap justify-center gap-10 bg-[#121212] py-20 max-w-screen-2xl mx-auto'>
            <div className='flex flex-col '>
                <Image src={about} alt='about-section'  />
            </div>
            <div className=' flex flex-col items-start max-sm:mx-6 text-center'>
                <h1 className='text-white text-4xl py-6 font-bold'>About Me</h1>
                <p className='text-white md:font-medium py-4 max-sm:text-sm'>I am a full stack web developer with a passion for creating<br />
                    interactive and responsive web applications. I have<br />
                    experience working with HTML, CSS, JavaScript, Typescript,<br />
                    React.js, Next.js Firebase, C++ and Git. I am a quick learner and<br />
                    I am always looking to expand my knowledge and skill set.<br />
                    I am a team player and I am excited to work with others<br />
                    to create amazing applications.</p>
                    <h2 className='text-white text-xl font-bold border-b-4 transition duration-300 border-[#D4419D]  '>Education</h2>
                    <ul className='py-4'>
                        <li><p className='text-white py-1'>BS(Software Engineering)</p></li>
                 <li>  <p className='text-white py-1'>SMIT(Web $ App developement)</p></li> 
                  <li>  <p className='text-white py-1'>GIAIC(AI & Cloud Computing)</p></li>
                    </ul>
                    <h2 className='text-white mb-2 text-xl  font-bold border-b-4 transition duration-300 border-[#D4419D] '>Certifications</h2>
                    <p className='text-white py-4'>Certification In MOS</p>
                    <p className='text-white'>LRN Certificate in React.js</p>
            </div>
        </div>
    )
}

export default About

import React from 'react'
import Image from 'next/image'
import header from "../../../public/hero-image.webp"; 
import hero from "../../../public/developer-girl.png";

const Hero = () => {
  return (
    <div className='flex  justify-center gap-6 flex-wrap md:flex-wrap bg-[#121212] max-w-screen-2xl mx-auto'>
          <div className='flex flex-col flex-wrap pt-32 '>
<h1 className='md:text-6xl font-semibold  text-[#D4419D] max-sm:text-3xl'>Hi , I'm Adeena</h1>
<h2 className='md:text-6xl font-semibold text-[#C478EA] pt-5 max-sm:text-3xl '>Frontend Developer</h2>
<div>
<button className=' text-xs text-white font-bold bg-[#D44190]  w-28 rounded-full  p-2 m-2 '>Hire Me</button>
<button className='text-xs text-white font-bold border-solid border-2 border-white hover:bg[#D44190] w-32 rounded-full md:my-8 p-2 m-2'>Download CV</button></div>
      </div>
      <div>
<Image src={header} alt='hero-image' className='my-20 max-sm:'/>
{/* <Image src={hero} alt='hero'/> */}
      </div>

    </div>
  
  

  )
}

export default Hero

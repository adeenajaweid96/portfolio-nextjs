import React from 'react'
import { Linkedin ,Github } from 'lucide-react';


const Contact = () => {
    return (
        <div className='flex flex-wrap pt-20 justify-evenly py-4 border-b-2 border-b-gray-500 bg-[#121212] max-w-screen-2xl mx-auto'>
            <div className='py-20'>
                <h1 className='text-white font-bold text-2xl'>Lets Connects</h1>
                <p className='text-gray-500 text-[17px] '>I am currently looking for new opportunities,You can connect<br/>
                 with me through github and linkedIn always open. Whether<br/>
                  you have a question or just want to say hi, I will try my best<br/>
                      to get back to you!<br/></p>
                      <div className='flex  mx-4 '>
                     <a href="https://www.linkedin.com/in/adeenajaweid96/" target='_blank'> 
                     <Linkedin className='text-white text-4xl my-4'/></a>
                      <a href="https://github.com/adeenajaweid96/" target='_blank'>
                      <Github className='text-white text-4xl my-4 mx-4'/></a>
                      </div>
                     
            </div>
            <div className='flex  flex-col flex-wrap'>
<label htmlFor="email" className='text-white pb-2'>Your Email</label>
<input type="email" placeholder='abc@gmail.com' className='bg-[#18191E] border-2 border-gray-800 w-[30rem] p-6 mb-6 h-[5%] rounded-md max-sm:w-[10rem]'/>
<label htmlFor="text" className='text-white pb-2'>Subject</label>
<input type="text" placeholder='Just saying hi' className='bg-[#18191E] border-2 border-gray-800 w-[30rem] p-6 mb-6 h-[5%] rounded-md max-sm:w-[10rem]'/>
        <label htmlFor="Message" className='pb-2 text-white'>Message</label>
        <textarea  className='bg-[#18191E] text-gray-400 border-2 border-gray-800 w-[30rem] p-6 mb-6 h-[20%] rounded-md max-sm:w-[10rem]'>Lets talk about..</textarea>
           <button className='bg-[#9333EA] text-white p-2 rounded-md'>Send Message</button>
            </div>
        </div>
    )
}

export default Contact

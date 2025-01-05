import React from 'react'
import Image from 'next/image'
import Project1 from '../../../public/project1.png';
import Project2 from '../../../public/project2.png'
import Project3 from '../../../public/project3.png'
import Project4 from '../../../public/project4.png';
import Project5 from '../../../public/project5.png';



const Projects = () => {
  return (
    <section className='bg-[#121212] max-w-screen-2xl mx-auto'>  
          <h1 className='text-center text-white text-4xl font-bold pt-8'>My Projects</h1>
<div className='flex justify-center flex-wrap gap-20 py-20'>

<div>
<a href="https://figma-nextjs-expense.vercel.app/" target='_blank'>  
 <Image src={Project1}  className='w-80 h-56 ' alt='project1'/>
 <h1 className='text-white text-center font-sans pt-3 text-xl font-medium'>Expense App</h1></a>
</div>

<div>
<a href="https://adeenajaweid96.github.io/Case-Study/" target='_blank'>
 <Image src={Project2}  className='w-80 h-56'  alt='project2'/>
 <h1 className='text-white text-center font-sans pt-3 text-xl font-medium'>Case Study</h1></a> 
</div>


<div>
<a href="https://adeenajaweid96.github.io/todolist-smit/" target='_blank'> 
<Image src={Project3}  className='w-80 h-56'  alt='project3'/>
<h1 className='text-white text-center font-sans pt-3 text-xl font-medium'>To-do List</h1></a> 
</div>


<div>
<a href="https://final-livid-xi.vercel.app/" target='_blank'> 
<Image src={Project4}  className='w-80 h-56'  alt='project4'/>
<h1 className='text-white text-center font-sans pt-3 text-xl font-medium'>Bazaar</h1></a> 
</div>

<div>
<a href="https://giaic-ui-hackathon2.vercel.app/" target='_blank'> 
<Image src={Project5}  className='w-80 h-56'  alt='project5'/>
<h1 className='text-white text-center font-sans pt-3 text-xl font-medium'>Avion</h1></a> 
</div>


</div>
</section>

  )
}

export default Projects


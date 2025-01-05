import React from 'react'
import Hero from "./component/hero";
import About from './component/about';
import Projects from './component/projects';
import Contact from './component/contact';

const Page = () => {
  return (
    <div>
      
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Page

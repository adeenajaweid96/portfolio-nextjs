import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import images from '../../../public/logo-a.png';
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  


const Navbar = () => {
  return (
    <nav className='flex justify-between bg-[#121212] py-4 max-w-screen-2xl mx-auto'>
    <div className='ml-20'>
        <Image src={images} alt='logo' height={80} width={80}/>

    </div>
    <ul className='hidden md:block'>
        <li  className='space-x-10 p-6 font-medium text-base '>
            <Link href='/' className=' text-gray-400 text-xl hover:border-b-4 hover:border-b-gray-500 transition duration-300 hover:text-white'>Home</Link>
            <Link href='/about' className='text-gray-400 text-xl hover:border-b-4 hover:border-b-gray-500 transition duration-300 hover:text-white'>About</Link>
            <Link href='/projects' className='text-gray-400 text-xl hover:border-b-4 hover:border-b-gray-500 transition duration-300 hover:text-white'>Projects</Link>

            <Link href='/contact' className='text-gray-400 text-xl hover:border-b-4 hover:border-b-gray-500 transition duration-300 hover:text-white'>Contact</Link>
        </li>
    </ul>

    <Sheet>
  <SheetTrigger className='md:hidden'>
  <Menu className='text-white'/>

  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>
      <Image src={images} height={50} width={50} alt='logo' />

      </SheetTitle>
      <SheetDescription>
      <ul className='flex justify-center '>
        <li  className=' p-6 font-medium  text-base flex flex-col text-center'>
            <Link href='/' className='hover:border-b-4 my-2 text-gray-400 text-xl  hover:border-b-gray-500  transition duration-300 hover:text-black'>Home</Link>
            <Link href='/about' className='hover:border-b-4 my-2 text-gray-400 text-xl  hover:border-b-gray-500  transition duration-300 hover:text-black'>About</Link>
            <Link href='/projects' className='hover:border-b-4 my-2 text-gray-400 text-xl  hover:border-b-gray-500  transition duration-300 hover:text-black'>Projects</Link>
            <Link href='/contact' className='hover:border-b-4 my-2 text-gray-400 text-xl  hover:border-b-gray-500  transition duration-300 hover:text-black'>Contact</Link>
        </li>
    </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

</nav>

  )
}

export default Navbar

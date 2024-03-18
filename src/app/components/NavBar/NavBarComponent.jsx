'use client'
import { Navbar } from 'flowbite-react';
import IstadLogo from '../IstadLogo/IstadLogo';
import Link from 'next/link';

export default function NavbarComponent() {
  return (
    <Navbar  fluid rounded className='bg-[#253D94] rounded-none  fixed top-0 w-full z-10'>
    <div className='w-full flex flex-wrap items-center justify-between'>
      <Navbar.Brand as={Link} href="/">
        <IstadLogo/>
        <span className="self-center ml-2 text-xl font-semibold text-white tracking-widest">CSTAD</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='p-4 font-bold mt-4 lg:mt-0'>
        <Navbar.Link href="/" className='text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
          Home
        </Navbar.Link>
        <Navbar.Link href="enroll" className='text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
          Enroll
        </Navbar.Link>
        <Navbar.Link href="courses" className='text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
          Course
        </Navbar.Link>
        <Navbar.Link href="it-news" className='text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
          IT News
        </Navbar.Link>
        <Navbar.Link href="job-opportunity" className='text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
          Job Opportunity
        </Navbar.Link>
        <Navbar.Link href="about-us" className='text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
          About Us
        </Navbar.Link>
      </Navbar.Collapse>
    </div>
  </Navbar>
  
  );
}

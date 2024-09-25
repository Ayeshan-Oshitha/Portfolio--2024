import React from 'react'
import styles from '../styles/Container.module.css'
import ProfileImg from '../assets/images/ProfileImg.jpg'
import { LiaArrowCircleRightSolid } from "react-icons/lia";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareBehance } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaStackOverflow } from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";
import { MdOutlineMobileScreenShare } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>

      <div className='grid lg:grid-cols-12 lg:grid-rows-4 gap-7 min-h-12 lg:h-[800px] mb-40 '>

        {/* ---------- Profile section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-3 lg:row-span-2 px-12 lg:px-0 py-2 flex flex-col items-center' id={styles.boxContainer}> 
          <img src={ProfileImg} className='w-40 rounded-full mt-6 '/> 
          <button className='bg-[var(--lightPurple)]  tracking-wide py-3 px-3 mt-12   rounded-lg text-xl font-normal hover:bg-[var(--secondaryPurple)]'>Ayeshan Oshitha</button>
            <NavLink to="/about" className='flex flex-row items-center lg:px-6 mt-14 mb-6 lg:mb-0 justify-between w-full hover:text-purple-400'>
            <p className='text-md tracking-wide '>Biography</p> 
            <LiaArrowCircleRightSolid className='text-3xl '/> 
            </NavLink>
        </div>

        {/* ---------- Title section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-4 2xl:col-span-3 lg:row-span-1 px-12 lg:px-6 py-2 flex flex-col w-full' id={styles.boxContainer}> 
            <h1 className=' text-purple-500 tracking-wide lg:text-2xl lg:mt-2 lg:mb-3 '>Title </h1>
            <h1 className=' font-medium tracking-wide lg:ml-6 lg:text-5xl'>Full Stack</h1>
            <h2 className='  text-gray-400 tracking-wide lg:ml-6 lg:text-2xl'>Developer</h2>
        </div>

        {/* ---------- Social Media section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-5 2xl:col-span-6 lg:row-span-1  px-12 lg:px-6 py-2 flex flex-col ' id={styles.boxContainer}>
          <div className='flex flex-row justify-around mt-7 text-6xl text-gray-200'>
            <FaSquareGithub className='hover:text-purple-300' />
            <FaLinkedin  className='hover:text-purple-300'/>
            <FaSquareBehance className='hover:text-purple-300'/>
            <FaStackOverflow className='hover:text-purple-300'/>
            <IoLogoMedium className='hover:text-purple-300'/>
          </div>
          <NavLink to="/about" className='flex flex-row items-center mt-10 mb-6 lg:mb-0 justify-between w-full hover:text-purple-400'>
            <p className='text-md tracking-wide'>Profiles</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>
        </div>

        {/* ---------- Services Offering ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-6 lg:row-span-2 px-12 lg:px-6 py-2 flex flex-col ' id={styles.boxContainer}>
          <p className='text-4xl font-medium mt-3 mb-8'>Services Offering</p>
          <div className='flex flex-row justify-around flex-wrap gap-y-6'>
            <div className='flex flex-col items-center w-32'>
              <MdOutlineMobileScreenShare className='text-6xl mb-2' />
              <p className='text-xl text-gray-300 '>Web Design</p>
            </div>
            <div className='flex flex-col items-center w-32'>
              <MdOutlineMobileScreenShare className='text-6xl mb-2' />
              <p className='text-xl text-gray-300'>Mobile Design</p>
            </div>
            <div className='flex flex-col items-center w-32'>
              <MdOutlineMobileScreenShare className='text-6xl mb-2' />
              <p className='text-xl text-gray-300'>UI/UX</p>
            </div>
            <div className='flex flex-col items-center w-32'>
              <MdOutlineMobileScreenShare className='text-6xl mb-2' />
              <p className='text-xl text-gray-300'>Mobile Design</p>
            </div>
            <div className='flex flex-col items-center w-32'>
              <MdOutlineMobileScreenShare className='text-6xl mb-2' />
              <p className='text-xl text-gray-300'>ML/AI</p>
            </div>
          </div>
          <NavLink to="/about" className='flex flex-row items-center mt-8 mb-6 lg:mb-0 justify-between w-full hover:text-purple-400'>
            <p className='text-md tracking-wide'>All Services</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>
        </div>

        {/* ---------- Data section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-3 lg:row-span-3 px-12 lg:px-6 py-2 flex flex-col w-full items-center justify-evenly uppercase' id={styles.boxContainer}>
          <div className='text-center'>
            <p className='text-8xl'>06</p>
            <p className='font-light text-lg text-gray-300 mt-2 '>Year Experience</p>
          </div>
          <div className='text-center'>
            <p className='text-8xl'>+10</p>
            <p className='font-light text-lg text-gray-300 mt-2'>Projects</p>
          </div>
          <div className='text-center'>
            <p className='text-8xl'>+27</p>
            <p className='font-light text-lg text-gray-300 mt-2'>Clients worldwide</p>
          </div>
        </div>

        {/* ---------- Articles section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-3 lg:row-span-1 px-12 lg:px-6 py-2 w-full ' id={styles.boxContainer}> 
        <p className='text-4xl font-medium mt-4'>Articles</p>
        <p className='text-2xl font-normal pl-7'>& Publications</p>
        <NavLink to="/about" className='flex flex-row items-center  mt-10  justify-between w-full hover:text-purple-400'>
            <p className='text-md tracking-wide '>All blog</p> 
            <LiaArrowCircleRightSolid className='text-3xl '/> 
            </NavLink>
        </div>


        <div className='min-h-20 col-span-12  lg:col-span-9 lg:row-span-1 ' id={styles.boxContainer}> 7 </div>


      </div>


    </>
  )
}

export default Home
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
import { NavLink } from 'react-router-dom';
import graphicImage from '../assets/images/GraphicProjectImg.jpg'
import webImage from '../assets/images/WebProjectImg.jpg'

import { MdOutlineMobileScreenShare } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";

// Tech Icons
import { FaReact } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiSpringboot } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

const Home = () => {
  return (
    <>

      {/* ++++++++++++++ First Grid  ++++++++++++++ */}
      <div className='grid lg:grid-cols-12 lg:grid-rows-4 gap-7 min-h-12 lg:h-[800px] mb-7 '>

        {/* ---------- Profile section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-3 lg:row-span-2 px-8 lg:px-0 py-2 flex flex-col items-center order-1 lg:order-1' id={styles.boxContainer}>
          <img src={ProfileImg} className='w-40 rounded-full mt-6 ' />
          <button className='bg-[var(--lightPurple)]  tracking-wide py-3 px-3 mt-12   rounded-lg text-xl font-normal hover:bg-[var(--secondaryPurple)]'>Ayeshan Oshitha</button>
          <NavLink to="/about" className='flex flex-row items-center lg:px-6 mt-12 mb-2 lg:mb-0 justify-between w-full hover:text-purple-400 transform transition-transform duration-500 hover:scale-105'>
            <p className='text-md tracking-wide '>Biography</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>
        </div>

        {/* ---------- Title section ---------- */}
        <div className='min-h-20 col-span-6  lg:col-span-4 2xl:col-span-3 lg:row-span-1 px-10 lg:px-6 py-2 flex flex-col w-full order-2 lg:order-2' id={styles.boxContainer}>
          <h1 className=' text-purple-500 tracking-wide text-2xl lg:text-2xl mt-3 lg:mt-2 lg:mb-3 '>Title </h1>
          <h1 className=' font-medium tracking-wide lg:ml-6 text-4xl lg:text-5xl'>Full Stack</h1>
          <h2 className='  text-gray-400 tracking-wide lg:ml-6 text-2xl lg:text-2xl'>Developer</h2>
        </div>

        {/* ---------- Social Media section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-5 2xl:col-span-6 lg:row-span-1  px-6 lg:px-6 py-2 flex flex-col order-5 lg:order-3' id={styles.boxContainer}>
          <div className='flex flex-row justify-around mt-7 text-6xl text-gray-200 '>
            <FaSquareGithub className='hover:text-purple-300 transform transition-transform duration-700 hover:scale-125' />
            <FaLinkedin className='hover:text-purple-300 transform transition-transform duration-700 hover:scale-125' />
            <FaSquareBehance className='hover:text-purple-300 transform transition-transform duration-700 hover:scale-125' />
            <FaStackOverflow className='hover:text-purple-300 transform transition-transform duration-700 hover:scale-125' />
            <IoLogoMedium className='hover:text-purple-300 transform transition-transform duration-700 hover:scale-125' />
          </div>
          <NavLink to="/about" className='flex flex-row items-center mt-8 mb-2 lg:mb-0 justify-between w-full hover:text-purple-400 transform transition-transform duration-500 hover:scale-105'>
            <p className='text-md tracking-wide'>Profiles</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>
        </div>

        {/* ---------- Services Offering ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-6 lg:row-span-2 px-6 lg:px-6 py-2 flex flex-col order-4 lg:order-4' id={styles.boxContainer}>
          <p className='text-4xl font-medium mt-3 mb-8'>Services Offering</p>
          <div className='flex flex-row justify-around flex-wrap gap-y-6 lg:mt-10 flex-grow'>
            <div className='flex flex-col items-center w-32 text-center'>
              <CgWebsite className='text-6xl mb-2 text-purple-500' />
              <p className='text-xl text-gray-300 '>Web Design</p>
            </div>
            <div className='flex flex-col items-center w-32 text-center'>
              <MdOutlineMobileScreenShare className='text-6xl mb-2 text-purple-500' />
              <p className='text-xl text-gray-300'>Mobile Design</p>
            </div>
            <div className='flex flex-col items-center w-32 text-center'>
              <GiClick className='text-6xl mb-2 text-purple-500' />
              <p className='text-xl text-gray-300'>UI/UX</p>
            </div>
            <div className='flex flex-col items-center w-32 text-center'>
              <FaBookOpen className='text-6xl mb-2 text-purple-500' />
              <p className='text-xl text-gray-300'>Book Design</p>
            </div>

          </div>
          <NavLink to="/about" className='flex flex-row items-center mt-8 mb-2 lg:mt-0 lg:mb-2 justify-between w-full hover:text-purple-400 transform transition-transform duration-500 hover:scale-105'>
            <p className='text-md tracking-wide'>All Services</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>
        </div>

        {/* ---------- Data section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-3 lg:row-span-3 px-6 lg:px-6 py-8 flex flex-row  flex-wrap lg:flex-col w-full items-center justify-evenly uppercase order-6 lg:order-5' id={styles.boxContainer}>
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
        <div className='min-h-20 col-span-6  lg:col-span-3 lg:row-span-1 px-6 lg:px-6 py-2 w-full order-3 lg:order-6' id={styles.boxContainer}>
          <p className='text-4xl font-medium mt-4'>Articles</p>
          <p className=' text-2xl lg:text-xl  xl:text-2xl font-normal pl-7'>& Publications</p>
          <NavLink to="/about" className='flex flex-row items-center  mt-10  justify-between w-full hover:text-purple-400 transform transition-transform duration-300 hover:scale-105'>
            <p className='text-md tracking-wide '>All blog</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>
        </div>

        {/* ---------- Technology section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-9 lg:row-span-1 flex flex-col px-6 lg:px-6 py-2  justify-center order-7 lg:order-7' id={styles.boxContainer}>
          <div className='flex flex-row  gap-10 justify-center text-6xl mt-8 flex-grow flex-wrap lg:flex-nowrap'>
            <FaReact className='text-sky-400 transform transition-transform duration-700 hover:scale-125' />
            <AiOutlineDotNet className='text-purple-600 transform transition-transform duration-700 hover:scale-125' />
            <SiSpringboot className='text-lime-500 transform transition-transform duration-700 hover:scale-125' />
            <FaNodeJs className='text-green-600 transform transition-transform duration-700 hover:scale-125' />
            <SiMicrosoftsqlserver className='text-red-600 transform transition-transform duration-700 hover:scale-125' />
            <SiMongodb className='text-green-500 transform transition-transform duration-700 hover:scale-125' />
            <SiMysql className='text-cyan-700 transform transition-transform duration-700 hover:scale-125' />
            <RiTailwindCssFill className='text-teal-400 transform transition-transform duration-700 hover:scale-125' />
            <FaBootstrap className='text-purple-500 transform transition-transform duration-700 hover:scale-125' />
          </div> 
          <NavLink to="/about" className='flex flex-row items-center  mt-4 lg:mt-0 mb-2 lg:mb-2 lg:px-6 justify-between w-full hover:text-purple-400 transform transition-transform duration-500 hover:scale-105'>
            <p className='text-md tracking-wide'>Technologies</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>
        </div>

      </div>

      {/* ++++++++++++++ Second Grid  ++++++++++++++ */}
      <div className='grid lg:grid-cols-12 lg:grid-rows-3 gap-7 min-h-12 lg:h-[500px] mb-40 '>

        {/* ---------- Web Design Design Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-4 lg:row-span-3 px-6 lg:px-6 py-2 flex flex-col items-center lg:order-1 ' id={styles.boxContainer}>
          <p className='self-start ml-6 mt-4 lg:mt-8 text-2xl'>See My Latest</p>
          <p className='self-start ml-6 text-3xl mt-2'>Web Design Projects</p>
          <img src={webImage} className=' w-80  rounded-xl mt-10 object-cover transition-transform duration-300 hover:scale-105' />
          <NavLink to="/about" className='flex flex-row items-center mt-6  mb-2 lg:mt-14 lg:mb-2 justify-between w-full hover:text-purple-400 transform transition-transform duration-500 hover:scale-105'>
            <p className='text-md tracking-wide'>All Projects</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>
        </div>


        {/* ---------- Graphic Design Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-4 lg:row-span-2 px-6 lg:px-6 py-2 flex flex-col items-center lg:order-2 ' id={styles.boxContainer}>
         <p className='mt-3 self-start ml-4 text-xl'>Graphic Design Projects</p>
          <img src={graphicImage} className=' w-80 lg:w-80 lg:h-72  rounded-xl mt-6 object-cover transform transition-transform duration-300 hover:scale-105' />
          <NavLink to="/about" className='flex flex-row items-center mt-6  mb-6 lg:mt-3 lg:mb-2 justify-between w-full hover:text-purple-400 transform transition-transform duration-500 hover:scale-105'>
            <p className='text-md tracking-wide'>Graphic Design Projects</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>
        </div>

        {/* ---------- Web Review Review Section ---------- */}
        <div className='min-h-20 col-span-6  lg:col-span-4 lg:row-span-1 px-6 lg:px-6 py-2 flex flex-col  lg:order-3' id={styles.boxContainer}>
          <p className='text-lg mt-4 lg:mt-0'>See My Latest </p>
          <p className='lg:ml-6  text-4xl lg:text-3xl text-purple-600'>Web Design</p>
          <p className='lg:ml-40 text-2xl text-purple-600'>Reviews</p>
          <NavLink to="/about" className='flex flex-row items-center  mb-6 mt-4 lg:mt-0 lg:mb-2 justify-between w-full hover:text-purple-400 transform transition-transform duration-500 hover:scale-105'>
            <p className='text-md tracking-wide'>Reviews</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>
        </div>

        {/* ---------- Graphic Review Section ---------- */}
        <div className='min-h-20 col-span-6  lg:col-span-4 lg:row-span-1 px-6 lg:px-6 py-2 flex flex-col lg:order-4' id={styles.boxContainer}>
          <p className='text-lg mt-4 lg:mt-0'>See My Latest </p>
          <p className='lg:ml-6 text-4xl lg:text-3xl text-purple-600'>Graphic Design</p>
          <p className='lg:ml-40 text-2xl text-purple-600'>Reviews</p>
          <NavLink to="/about" className='flex flex-row items-center  mb-6 mt-4 lg:mt-0 lg:mb-2 justify-between w-full hover:text-purple-400 transform transition-transform duration-500 hover:scale-105'>
            <p className='text-md tracking-wide'>Reviews</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>

        </div>

        {/* ---------- Contact Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-8 lg:row-span-1 px-12 lg:px-8 py-2  lg:order-5' id={styles.boxContainer}>
          <div className=' flex flex-row justify-between  items-end w-full h-full pb-5'>
            <p className=' text-5xl md:text-6xl lg:text-6xl  xl:text-7xl'>Let's Work <span className='text-purple-600'>together</span></p>
            <NavLink to="/about" className='  hover:text-purple-400 transform transition-transform duration-500 hover:scale-105'>
              <LiaArrowCircleRightSolid className='text-3xl ' />
            </NavLink>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home
import React from 'react'
import styles from '../styles/Container.module.css'
import ProfileImg from '../assets/images/ProfileImg.jpg'
import { NavLink } from 'react-router-dom';

import { LiaArrowCircleRightSolid } from "react-icons/lia";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareBehance } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaStackOverflow } from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";

const About = () => {
  return (
    <>

      {/* ++++++++++++++ First Grid  ++++++++++++++ */}
      <div className='grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[350px] mb-7 '>

        {/* ---------- Description Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-8 px-12 lg:px-12 py-2 order-2 lg:order-1' id={styles.boxContainer}>
          <p className='mt-6 text-4xl tracking-wider'>Hello, </p>
          <p className='mt-2 text-3xl tracking-wider'>I'm Ayeshan Oshitha,</p>
          <p className='mt-1 text-3xl'> an enthustiatic Full Stack Developer</p>
          <p className='mt-6 text-base text-gray-400'>As a skilled Product designer, illustrator, and visual development expert, my diverse background has allowed me to apply my talents across different fields and industries, demonstrating adaptability and versatility.</p>
          <button className=' mt-4 mb-4 lg:mt-6 xl:mt-8 lg:mb-2 bg-purple-600 px-5 py-2 text-lg rounded-full cursor-pointer hover:bg-purple-700'>Download CV</button>
        </div>

        {/* ---------- Image Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-4  px-12 lg:px-0 py-8 lg:py-2 flex justify-center items-center order-1 lg:order-2' id={styles.boxContainer}>
          <img src={ProfileImg} className='w-48 lg:w-60 rounded-full' />
        </div>
      </div>

      {/* ++++++++++++++ Second Grid  ++++++++++++++ */}
      <div className='grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[250px]  mb-7'>

        {/* ---------- Education Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-4 px-12 lg:px-12 py-6 ' id={styles.boxContainer}>
          <p className='text-3xl'>Education</p>
          <div className="flex flex-row">
            <div className='lg:mt-6'>
              <p className='text-gray-400'>2022 - 2026</p>
              <p className='mt-2 text-lg'>University of Moratuwa , Sri Lanka</p>
              <p className='mt-2 text-gray-400 font-light'>BSc Hons in Information Technology</p>
            </div>
          </div>
        </div>

        {/* ---------- Certificate Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-8  px-12 lg:px-12 py-6' id={styles.boxContainer}>
          <p className='text-3xl'>Certificate</p>
          <div className=' mt-4 flex flex-col gap-y-2'>
            <div className='flex flex-row items-center'>
              <MdKeyboardDoubleArrowRight className='text-xl mr-4' />
              <p className='text-base font-extralight'>Backend Development for .Net Full Stack  -  <span className='italic font-extralight text-base'>Coursera</span></p>
            </div>
            <div className='flex flex-row items-center'>
              <MdKeyboardDoubleArrowRight className='text-xl mr-4' />
              <p className='text-base font-extralight'>Spring Boot 3, Spring 6 & Hibernate for Beginners  -  <span className='italic font-extralight text-base'>Udemy</span></p>
            </div>
            <div className='flex flex-row items-center'>
              <MdKeyboardDoubleArrowRight className='text-xl mr-4' />
              <p className='text-base font-extralight'>React - The Complete Guide 2024 (incl. Next.js, Redux)  -  <span className='italic font-extralight text-base'>Coursera</span></p>
            </div>
            <div className='flex flex-row items-center'>
              <MdKeyboardDoubleArrowRight className='text-xl mr-4' />
              <p className='text-base font-extralight'>NodeJS - The Complete Guide (MVC, REST APIs, GraphQL)  -  <span className='italic font-extralight text-base'>Coursera</span></p>
            </div>
            <div className='flex flex-row items-center'>
              <MdKeyboardDoubleArrowRight className='text-xl mr-4' />
              <p className='text-base font-extralight'>Figma UI UX Design Essentials  -  <span className='italic font-extralight text-base'>Coursera</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* ++++++++++++++ Second Grid  ++++++++++++++ */}
      <div className='grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[200px]  mb-20'>

        {/* ---------- Profile Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-7 px-12 lg:px-6 py-8 lg:py-2 flex flex-col justify-center items-center' id={styles.boxContainer}>
          <div className='flex flex-row flex-wrap justify-around text-6xl gap-4 lg:gap-2 text-gray-200 w-full '>
            <FaSquareGithub className='hover:text-purple-300 transform transition-transform duration-700 hover:scale-125' />
            <FaLinkedin className='hover:text-purple-300 transform transition-transform duration-700 hover:scale-125' />
            <FaSquareBehance className='hover:text-purple-300 transform transition-transform duration-700 hover:scale-125' />
            <FaStackOverflow className='hover:text-purple-300 transform transition-transform duration-700 hover:scale-125' />
            <IoLogoMedium className='hover:text-purple-300 transform transition-transform duration-700 hover:scale-125' />
          </div>
        </div>

        {/* ---------- Contact Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-5  px-12 lg:px-6 py-2' id={styles.boxContainer}>
          <div className=' flex flex-row justify-between items-end  w-full pb-5'>
            <div className='flex flex-row flex-wrap lg:flex-col mt-4'>
              <p className=' text-3xl font-medium tracking-wide'>Let's Work </p>
              <p className='text-3xl pl-2 lg:pl-16 font-medium tracking-wide'>Together...!</p>
            </div>
          </div>
          <NavLink to="/about" className='flex flex-row flex-grow lg:mt-8 lg:mb-2 justify-between items-center w-full  hover:text-purple-400 transform transition-transform duration-500 hover:scale-105'>
            <p className='text-md tracking-wide'>Get in Touch</p>
            <LiaArrowCircleRightSolid className='text-3xl ' />
          </NavLink>
        </div>
      </div>

    </>
  )
}

export default About
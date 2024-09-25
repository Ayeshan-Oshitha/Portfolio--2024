import React from 'react'
import styles from '../styles/Container.module.css'
import Image from '../assets/images/ProfileImg.jpg'
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({image, name, projectType, review}) => {
  return (
    <>
      <div className='w-96  min-h-[500px]  p-3 ' id={styles.boxContainer}>
        <div className='w-full flex flex-col items-center'>
          <img src={Image} className='w-24 rounded-full mt-3 ' />
          <p className='mt-6 text-2xl'>Angela Harvey</p>
          <p className='mt-1 text-sm text-gray-400 font-semibold tracking-wider'>USA</p>
          <div className='flex flex-row gap-1 mt-7 mb-4'>
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
          </div>
          <p className='mt-3 text-xl'>Project type</p>
          <p className='mt-1 text-sm text-gray-400 font-medium tracking-wider'>Full Stack Web Design</p>
          <div className='mt-5 text-center text-sm font-light tracking-wide mx-3 overflow-hidden' style={{ maxHeight: '8.5rem', overflowY: 'auto' }}>
            <p className='line-clamp-3'>
              This Full Stack project showcases impressive technical proficiency and a comprehensive understanding of both frontend and backend development. The application demonstrates a clean and intuitive user interface, coupled with robust backend functionality. The use of modern frameworks and technologies such as React for the frontend and Node.js with Express for the backend highlights the developer's skill in creating a seamless, responsive, and dynamic user experience.
            </p>
          </div>
          <p className='mt-5 hover:text-purple-300 cursor-pointer'>See More</p>
        </div>
      </div>
    </>
  )
}

export default TestimonialCard
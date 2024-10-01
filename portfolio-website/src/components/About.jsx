import React from 'react'
import styles from '../styles/Container.module.css'
import ProfileImg from '../assets/images/ProfileImg.jpg'

const About = () => {
  return (
    <>

    {/* ++++++++++++++ First Grid  ++++++++++++++ */}
      <div className='grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[350px] mb-7 '>

        {/* ---------- Description Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-8 px-12 lg:px-12 py-2' id={styles.boxContainer}>
          <p className='mt-6 text-4xl tracking-wider'>Hello, </p>
          <p className='mt-2 text-3xl tracking-wider'>I'm Ayeshan Oshitha,</p>
          <p className='mt-1 text-3xl'> an enthustiatic Full Stack Developer</p>
          <p className='mt-6 text-base text-gray-400'>As a skilled Product designer, illustrator, and visual development expert, my diverse background has allowed me to apply my talents across different fields and industries, demonstrating adaptability and versatility.</p>
          <button className=' mt-4 mb-4 lg:mt-8 lg:mb-2 bg-purple-600 px-5 py-2 text-lg rounded-full cursor-pointer hover:bg-purple-700'>Download CV</button>
        </div>

        {/* ---------- Image Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-4  px-12 lg:px-0 py-2 flex justify-center items-center' id={styles.boxContainer}>
        <img src={ProfileImg} className='w-60 rounded-full' />
        </div>
      </div>

      {/* ++++++++++++++ Second Grid  ++++++++++++++ */}
      <div className='grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[250px]  mb-7'>
        {/* ---------- Education Section ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-6 px-12 lg:px-12 py-6 ' id={styles.boxContainer}>
          <p>Education</p>
          <div className="flex flex-row">
            <div className='w-2/3'>
              <p>2022 - 2026</p>
              <p></p>
            </div>
          </div>
        </div>


        <div className='min-h-20 col-span-12  lg:col-span-6  px-12 lg:px-0 py-2' id={styles.boxContainer}>
        Certificate 
        </div>
      </div>

      <div className='grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[200px]  mb-20'>
        <div className='min-h-20 col-span-12  lg:col-span-7 px-12 lg:px-0 py-2' id={styles.boxContainer}>
          Social Media 
        </div>
        <div className='min-h-20 col-span-12  lg:col-span-5  px-12 lg:px-0 py-2' id={styles.boxContainer}>
        Contact Us 
        </div>
      </div>
    
    </>
  )
}

export default About
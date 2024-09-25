import React from 'react'
import styles from '../styles/Container.module.css'

const About = () => {
  return (
    <>
      <div className='grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[300px] mb-7 '>
        <div className='min-h-20 col-span-12  lg:col-span-8 px-12 lg:px-0 py-2' id={styles.boxContainer}>
          Description 
        </div>
        <div className='min-h-20 col-span-12  lg:col-span-4  px-12 lg:px-0 py-2' id={styles.boxContainer}>
        Image 
        </div>
      </div>

      <div className='grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[250px]  mb-7'>
        <div className='min-h-20 col-span-12  lg:col-span-6 px-12 lg:px-0 py-2' id={styles.boxContainer}>
          Education 
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
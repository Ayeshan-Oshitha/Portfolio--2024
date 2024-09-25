import React from 'react'
import styles from '../styles/Container.module.css'

const Contact = () => {
  return (
    <>  
          <div className='grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[600px] mb-7 '>
              <div className='min-h-20 col-span-12  lg:col-span-4 px-12 lg:px-0 py-2 ' > Simple Details </div>
              <div className='min-h-20 col-span-12  lg:col-span-8 px-12 lg:px-0 py-2' id={styles.boxContainer}>Contact Form</div>
          </div>
    </>
  )
}

export default Contact
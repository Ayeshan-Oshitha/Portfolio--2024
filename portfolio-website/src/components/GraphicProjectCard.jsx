import React from 'react'
import styles from '../styles/Container.module.css'
import image1 from '../assets/images/SampleProjectImg.png'

const GraphicProjectCard = () => {
  return (
    <>
        <div className='w-[390px]  min-h-[500px] p-3 ' id={styles.boxContainer}>
            <div className='w-full flex flex-col items-center p-3'>
                <img src={image1} className=' rounded-2xl  ' />
                <p className='mt-8 self-start font-medium tracking-wider text-xl'>Upon Reflection</p>
                <div className='mt-5 self-start text-sm font-light tracking-wide  overflow-hidden' style={{ maxHeight: '8.5rem', overflowY: 'auto' }}>
            <p className='line-clamp-3'>
              This Full Stack project showcases impressive technical proficiency and a comprehensive understanding of both frontend and backend development. The application demonstrates a clean and intuitive user interface, coupled with robust backend functionality. The use of modern frameworks and technologies such as React for the frontend and Node.js with Express for the backend highlights the developer's skill in creating a seamless, responsive, and dynamic user experience.
            </p>
          </div>
          <p className='mt-5 self-start hover:text-purple-300 cursor-pointer'>See More</p>
        </div>
        </div>
    
    </>
  )
}

export default GraphicProjectCard
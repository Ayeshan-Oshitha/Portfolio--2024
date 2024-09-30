import React from 'react'
import styles from '../styles/Container.module.css'
import TestimonialCard from './TestimonialCard'
import GraphicProjectCard from './GraphicProjectCard'

const Testimonials = () => {
  return (
    <>
    <div className='grid  gap-7 h-auto mb-20 px-6 py-6 '>
        {/* <div className='flex flex-row flex-wrap w-full justify-center gap-10'> */}
        <div className='flex flex-row flex-wrap w-full justify-evenly gap-x-8 gap-y-10'>
            {/* <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/> 
             <TestimonialCard/> */}

            <GraphicProjectCard />
            <GraphicProjectCard />
            <GraphicProjectCard />
            <GraphicProjectCard />
            <GraphicProjectCard />
            </div>
    </div>
    </>
  )
}

export default Testimonials
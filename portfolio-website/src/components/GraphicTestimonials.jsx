import React from 'react'
import styles from '../styles/Container.module.css'
import TestimonialCard from './TestimonialCard'
import GraphicProjectCard from './GraphicProjectCard'
import { WEB_TESTOMONIALS } from '../constants'

const GraphicTestimonials = () => {
  return (
    <>
    <div className='grid  gap-7 h-auto mb-20 px-6 py-6 '>
        {/* <div className='flex flex-row flex-wrap w-full justify-center gap-10'> */}
        <div className='flex flex-row flex-wrap w-full justify-evenly gap-x-8 gap-y-10'>
          {WEB_TESTOMONIALS.map((webReview,index) => (
            <TestimonialCard 
            key={index}
              image={webReview.image}
              name={webReview.name}
              country={webReview.country}
              projectType={webReview.projectType}
              review={webReview.review}/>

            ))}
            </div>
    </div>
    </>
  )
}

export default GraphicTestimonials
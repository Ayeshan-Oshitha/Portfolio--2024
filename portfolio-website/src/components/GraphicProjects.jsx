import React from 'react'
import GraphicProjectCard from './GraphicProjectCard'
import { GRAPHIC_PROJECTS } from '../constants'

const GraphicProjects = () => {
  return (
      <>
          <div className='grid  gap-7 h-auto mb-20 px-6 py-6 '>
              <div className='flex flex-row flex-wrap w-full justify-evenly gap-x-8 gap-y-10'>
                {GRAPHIC_PROJECTS.map((project, index) => (
                  <GraphicProjectCard key={index} project={project} />
                ))}
              </div>
          </div>
      </>
  )
}

export default GraphicProjects
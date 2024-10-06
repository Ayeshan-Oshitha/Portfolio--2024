import React from 'react'
import GraphicProjectCard from './GraphicProjectCard'

const GraphicProjects = () => {
  return (
      <>
          <div className='grid  gap-7 h-auto mb-20 px-6 py-6 '>
              <div className='flex flex-row flex-wrap w-full justify-evenly gap-x-8 gap-y-10'>
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

export default GraphicProjects
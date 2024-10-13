import React from 'react'
import InProgressPage from './InProgressPage'
import WebProjectCard from './WebProjectCard'
import { WEB_PROJECTS } from '../constants'

const WebProjects = () => {
  return (
    <>
    {/* <InProgressPage text='Projects will be added soon.' /> */}
    <div className='flex flex-row flex-wrap gap-12 justify-center mb-40' >
      { WEB_PROJECTS.map((project, index) => (
          <WebProjectCard key={index} project={project} />
      ))}

    </div>
    </>
  )
}

export default WebProjects
import React from 'react'
import { GrInProgress } from "react-icons/gr";

const InProgressPage = () => {
  return (
    <>
    <div className='flex flex-row justify-center items-center gap-x-10'> 
    <GrInProgress className='text-5xl animate-rotate-back-forth' />
    <p className='text-xl'>This page is currently under development.</p>
    </div>
    </>
  )
}

export default InProgressPage
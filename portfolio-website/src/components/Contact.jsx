import React from 'react'
import styles from '../styles/Container.module.css'

import { FiPhone } from "react-icons/fi";
import { IoNavigateOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <div className='grid lg:grid-cols-12 gap-7 min-h-12 mb-7 '>

        {/* ---------- Contact Info ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-4  px-12 lg:px-0 py-2 flex flex-col ' >

          <p className='text-purple-500 text-lg'>Contact Info</p>
          <p className=' text-6xl mt-2 font-medium'>Get In Touch</p>
          <p className='text-gray-400 mt-2 text-xl tracking-wide'>Don’t be afraid man! Just say hello</p>

          <div className='flex flex-row flex-wrap lg:flex-col mt-8 mb-4 lg:mt-8 gap-4 lg:gap-6'>

            <div className='flex flex-row '>
              <div className='w-28 xl:w-36 h-28 flex items-center '>
                <div className=" w-24 h-24 rounded-full border-2 border-gray-500 flex justify-center items-center">
                  <FiPhone className="text-4xl text-purple-500" />
                </div>
              </div>
              <div className='w-48 h-24 flex flex-col justify-center '>
                <p className='text-2xl tracking-wider font-light'>Phone</p>
                <p className='text-base tracking-wide font-light text-gray-300'>(+94) 7693684102</p>
              </div>
            </div>

            <div className='flex flex-row '>
              <div className='w-28 xl:w-36 h-28 flex items-center '>
                <div className=" w-24 h-24 rounded-full border-2 border-gray-500 flex justify-center items-center">
                  <IoNavigateOutline className="text-4xl text-purple-500" />
                </div>
              </div>
              <div className='w-48 h-24 flex flex-col justify-center '>
                <p className='text-2xl tracking-wider font-light'>Email</p>
                <p className='text-base tracking-wide font-light text-gray-300'> oshitha.costa@gmail.com</p>
              </div>
            </div>

            <div className='flex flex-row '>
              <div className='w-28 xl:w-36 h-28 flex items-center'>
                <div className=" w-24 h-24 rounded-full border-2 border-gray-500 flex justify-center items-center">
                  <IoLocationOutline className="text-4xl text-purple-500" />
                </div>
              </div>
              <div className='w-48 h-24 flex flex-col justify-center '>
                <p className='text-2xl tracking-wider font-light'>Address</p>
                <p className='text-base tracking-wide leading-5 font-light text-gray-300 '>263/A Ginoya Road, Boralessa, Lunuwilla</p>
              </div>
            </div>
          </div>

        </div>

        {/* ---------- Contact Form ---------- */}
        <div className='min-h-20 col-span-12  lg:col-span-8 px-6 sm:px-10 py-14 ' id={styles.boxContainer}>

          <form className='flex flex-col gap-y-6 lg:gap-y-10'>
          <div className='flex flex-col lg:flex-row  gap-y-6 lg:gap-10 '>
            <div className='flex  flex-col w-full lg:w-1/2'>
                <label htmlFor="name" className='text-xl font-light tracking-wide '>Name</label>
                <input type='text' id='name' placeholder='Your name' autoComplete='off'  className='mt-2 h-12 bg-[#161517] border border-[#323232] rounded-xl px-2 font-extralight tracking-wider '/>
            </div>
            <div className='flex  flex-col w-full lg:w-1/2'>
                <label htmlFor="name" className='text-xl font-light tracking-wide'>Email</label>
                <input type='text' id='name' placeholder='Your Email' className='mt-2 h-12 bg-[#161517] border border-[#323232] rounded-xl px-2 font-extralight tracking-wider'/>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row gap-y-6 lg:gap-10 '>
            <div className='flex  flex-col w-full lg:w-1/2'>
                <label htmlFor="name" className='text-xl font-light tracking-wide'>Phone(Optional)</label>
                <input type='text' id='name' placeholder='Your Phone' className='mt-2 h-12  bg-[#161517] border border-[#323232] rounded-xl px-2 font-extralight tracking-wider '/>
            </div>
            <div className='flex  flex-col  w-full lg:w-1/2'>
                <label htmlFor="name" className='text-xl font-light tracking-wide'>Subject</label>
                <input type='text' id='name' placeholder='Your Subject' className='mt-2 h-12 bg-[#161517] border border-[#323232] rounded-xl px-2 font-extralight tracking-wider'/>
            </div>
          </div>

          <div className='flex flex-col w-full'>
            <label className='text-xl font-light tracking-wide'>Message</label>
            <textarea placeholder='Type your message..' className='mt-2 min-h-40 bg-[#161517] border border-[#323232] rounded-xl px-3 py-2 font-extralight tracking-wider' />
          </div>

          <div  className='flex flex-col w-full'> 
          <input type='submit' value='Submit Now' className='self-start  bg-purple-600 px-8 py-4 text-xl rounded-full cursor-pointer hover:bg-purple-700' />
          </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
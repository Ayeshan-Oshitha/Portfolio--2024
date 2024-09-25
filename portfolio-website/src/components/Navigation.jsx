import React from 'react'
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navigation = () => {
    return (
        <div className='grid grid-cols-12 gap-x-1  h-20 mb-20'
            style={{
                backgroundColor: 'var(--boxBackground)',
                border: 'var(--boxBorder)',
                borderRadius: 'var(--boxBorderRadius)'
            }}>

             {/* Logo section    */}
            <div className='col-span-2'></div>

            {/* Navigation Section */}
            <div className='col-span-6 flex justify-center items-center gap-6 text-lg '>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/">Projects</NavLink>
                <div className='flex flex-row items-center'>
                    <p>Other</p>
                    <RiArrowDropDownLine className='text-4xl' />
                </div>
                <NavLink to="/">Home</NavLink>


            </div>

            {/* Chat Section */}
            <div className='col-span-4'></div>
        </div>
    )
}

export default Navigation
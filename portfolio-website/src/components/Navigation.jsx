import React, { useState } from 'react'
import styles from '../styles/Container.module.css'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";

import { RxHamburgerMenu } from "react-icons/rx";

import logo from '../assets/logo/Logo.png'

const Navigation = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleButtonClick = () => {
        navigate('/contact')
    }

    return (
        <div className='grid grid-cols-12 gap-x-1  h-20 mb-20 relative'
            style={{
                backgroundColor: 'var(--boxBackground)',
                border: 'var(--boxBorder)',
                borderRadius: 'var(--boxBorderRadius)'
            }}>

             {/* Logo section    */}
            <div className='col-span-3 lg:col-span-2 flex justify-center items-center order-1 lg:order-1'>
                {/* <p className='text-purple-400 h-full'> <span className='text-6xl mr-[-12px] font-semibold'>  A </span> <span className='text-7xl'>  o </span> </p> */}
            </div>

            {/* Navigation Section */}
            <div className=' col-span-4 lg:col-span-7 justify-center items-center gap-7 text-lg hidden lg:flex order-3 lg:order-2  '>
                <NavLink to="/" className='hover:text-purple-400'>Home</NavLink>
                <NavLink to="/about" className='hover:text-purple-400'>About</NavLink>
                <NavLink to="/webProjects" className='hover:text-purple-400'>Projects</NavLink>
                <NavLink to="/services" className='hover:text-purple-400'>Services</NavLink>
                <NavLink to="/contact" className='hover:text-purple-400'>Contact</NavLink>
                <div 
                    className='flex flex-row items-center relative hover:text-purple-400 cursor-pointer'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <p >Other</p>
                    <RiArrowDropDownLine className='text-4xl ' />
                    {isDropdownOpen && (
                        <div className='absolute top-9 text-base z-10 w-52 flex flex-col items-start px-3 py-2 gap-y-1 text-white' id={styles.boxContainer}>
                            <NavLink to="/articles" className='hover:text-purple-400'>Articles</NavLink>
                            <NavLink to="/graphicProjects" className='hover:text-purple-400'>Graphic Projects</NavLink>
                            <NavLink to="/webTestimonials" className='hover:text-purple-400'>Full Stack Reviews</NavLink>
                            <NavLink to="/graphicTestimonials" className='hover:text-purple-400'>Graphic Design Reviews</NavLink>
                        </div>
                    )}
                </div>
            </div>

            <div className='col-span-2 flex justify-center items-center lg:hidden order-3 '>
                <RxHamburgerMenu className='text-3xl cursor-pointer' onClick={toggleMobileMenu} />
            </div>

            {isMobileMenuOpen && (
                <div className='absolute self-end  top-20 mt-2  z-50 w-full shadow-2xl lg:hidden flex flex-col items-end p-5 gap-y-2 select-none ' 
                style={{
                    backgroundColor: 'var(--boxBackground)',
                    border: '2px solid #9747FF',
                    borderRadius: 'var(--boxBorderRadius)'
                }}>
                    <NavLink to="/" className=' hover:text-purple-400  'onClick={toggleMobileMenu} >Home</NavLink>
                    <NavLink to="/about" className=' hover:text-purple-400' onClick={toggleMobileMenu} >About</NavLink>
                    <NavLink to="/webTestimonials" className=' hover:text-purple-400' onClick={toggleMobileMenu}>Projects</NavLink>
                    <NavLink to="/services" className=' hover:text-purple-400' onClick={toggleMobileMenu}>Services</NavLink>
                    <NavLink to="/contact" className=' hover:text-purple-400' onClick={toggleMobileMenu}>Contact</NavLink>
                    <NavLink to="/articles" className=' hover:text-purple-400' onClick={toggleMobileMenu}>Articles</NavLink>
                    <NavLink to="/graphicProjects" className=' hover:text-purple-400' onClick={toggleMobileMenu}>Graphic Projects</NavLink>
                    <NavLink to="/webTestimonials" className=' hover:text-purple-400' onClick={toggleMobileMenu}>Web Design Reviews</NavLink>
                    <NavLink to="/graphicTestimonials" className=' hover:text-purple-400' onClick={toggleMobileMenu}>Graphic Design Reviews</NavLink>
                </div>
            )}

            {/* Chat Section */}
            <div className='col-span-7 lg:col-span-3 justify-center items-center flex flex-row order-2 lg:order-3 cursor-pointer' onClick={handleButtonClick}>
                <button className='bg-purple-500 px-5 py-2 text-lg rounded-3xl hov'>Let's Talk</button>
                <div className='bg-purple-500 w-11 h-11 rounded-full flex justify-center items-center'>
                <MdArrowOutward className='text-3xl'/>
                </div>
            </div>
        </div>
    )
}

export default Navigation
import React from 'react'
import styles from '../styles/Container.module.css'

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiSpringboot } from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";

import { SiMysql } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";

const Technologies = () => {
  return (
    <>
    <div className='flex flex-row flex-wrap gap-x-16 gap-y-12 justify-center'>
        <div className='px-12 py-6' id={styles.boxContainer} >
            <p className='text-2xl text-center tracking-wider mb-6' >FrontEnd Technologies</p>
            <div className='flex flex-row justify-center flex-wrap text-6xl gap-12'>
                <FaReact style={{ color: '#61DBFB' }} />
                <SiNextdotjs style={{ color: '#ffffff' }}/>
            </div>
        </div>

        <div className='px-12 py-6' id={styles.boxContainer}>
            <p className='text-2xl text-center tracking-wider mb-6'>Backend Technologies</p>
            <div className='flex flex-row justify-center flex-wrap text-6xl gap-12'>
                <FaNodeJs style={{ color: '#339933' }}/>
                <AiOutlineDotNet style={{ color: '#512BD4' }}/>
                <SiSpringboot style={{ color: '#6DB33F' }}/>
            </div>
        </div>

        <div className='px-12 py-6' id={styles.boxContainer}>
            <p className='text-2xl text-center tracking-wider mb-6'>Database</p>
            <div className='flex flex-row justify-center flex-wrap text-6xl gap-12'>
                <SiMysql style={{ color: '#00758F' }}/>
                <SiMicrosoftsqlserver style={{ color: '#CC2927' }} />
                <SiMongodb style={{ color: '#47A248' }}/>
                <BiLogoPostgresql style={{ color: '#336791' }}/>
            </div>
        </div>

        <div className='px-12 py-6' id={styles.boxContainer} >
            <p className='text-2xl text-center tracking-wider mb-6'>CSS Frameworks</p>
            <div className='flex flex-row justify-center flex-wrap text-6xl gap-12'>
                <RiTailwindCssFill style={{ color: '#38B2AC' }}/>
                <FaBootstrap style={{ color: '#7952B3' }}/>
            </div>
        </div>

        <div className='px-12 py-6' id={styles.boxContainer} >
            <p className='text-2xl text-center tracking-wider mb-6'>Other</p>
            <div className='flex flex-row justify-center flex-wrap text-6xl gap-12'>
                <FaGitAlt style={{ color: '#F1502F' }} />
                <FaDocker style={{ color: '#2496ED' }} />
            </div>
        </div>

        </div>
    </>
  )
}

export default Technologies
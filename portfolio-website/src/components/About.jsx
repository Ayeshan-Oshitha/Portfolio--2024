import React from "react";
import styles from "../styles/Container.module.css";
import ProfileImg from "../assets/images/Home/ProfileImg6.png";
import cv from "../assets/CV/Ayeshan_Oshitha.pdf";
import { NavLink } from "react-router-dom";

import { LiaArrowCircleRightSolid } from "react-icons/lia";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareBehance } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaStackOverflow } from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";

const About = () => {
  return (
    <>
      {/* ++++++++++++++ First Grid  ++++++++++++++ */}
      <div className="grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[350px] mb-7 ">
        {/* ---------- Description Section ---------- */}
        <div
          data-aos="zoom-in-up"
          className="min-h-20 col-span-12  lg:col-span-8 px-12 lg:px-12 py-2 order-2 lg:order-1"
          id={styles.boxContainer}
        >
          <p className="mt-6 text-4xl tracking-wider">Hello, </p>
          <p className="mt-2 text-3xl tracking-wider">I'm Ayeshan Oshitha,</p>
          <p className="mt-1 text-3xl"> an enthustiatic Full Stack Developer</p>
          <p className="mt-6 text-base text-gray-400">
            As a skilled intern software engineer, my diverse background allows me to apply my technical talents across different
            fields and industries, demonstrating adaptability and versatility in problem-solving and software development.
          </p>
          <a href={cv} download="Ayeshan Oshitha CV.pdf">
            <button className=" mt-4 mb-4  lg:mt-3 xl:mt-6 lg:mb-4 bg-purple-600 px-5 py-2 text-lg rounded-full cursor-pointer hover:bg-purple-700">
              Download CV
            </button>
          </a>
        </div>

        {/* ---------- Image Section ---------- */}
        <div
          data-aos="zoom-in-up"
          className="min-h-20 col-span-12  lg:col-span-4   px-12 lg:px-0 py-8 lg:py-2 flex justify-center items-center order-1 lg:order-2"
          id={styles.boxContainer}
        >
          <img src={ProfileImg} className="w-48 lg:w-60 rounded-full" />
        </div>
      </div>

      {/* ++++++++++++++ Second Grid  ++++++++++++++ */}
      <div className="grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[250px]  mb-7">
        {/* ---------- Education Section ---------- */}
        <div className="min-h-20 col-span-12  lg:col-span-4 px-12 lg:px-12 py-6 " data-aos="zoom-in-up" id={styles.boxContainer}>
          <p className="text-3xl">Education</p>
          <div className="flex flex-row">
            <div className="lg:mt-6">
              <p className="text-gray-400">2022 - 2026</p>
              <p className="mt-2 text-lg">University of Moratuwa , Sri Lanka</p>
              <p className="mt-2 text-gray-400 font-light">BSc Hons in Information Technology</p>
            </div>
          </div>
        </div>

        {/* ---------- Certificate Section ---------- */}
        <div className="min-h-20 col-span-12  lg:col-span-8  px-12 lg:px-12 py-6 " data-aos="zoom-in-up" id={styles.boxContainer}>
          <p className="text-3xl">Certificate</p>
          <div className=" mt-4 flex flex-col gap-y-2">
            <div className="flex flex-row items-center">
              <MdKeyboardDoubleArrowRight className="text-xl mr-4" />
              <p className="text-base font-extralight">
                Backend Development for .Net Full Stack - <span className="italic font-extralight text-base">Coursera</span>
              </p>
            </div>
            <div className="flex flex-row items-center">
              <MdKeyboardDoubleArrowRight className="text-xl mr-4" />
              <p className="text-base font-extralight">
                Spring Boot 3, Spring 6 & Hibernate for Beginners -{" "}
                <span className="italic font-extralight text-base">Udemy</span>
              </p>
            </div>
            <div className="flex flex-row items-center">
              <MdKeyboardDoubleArrowRight className="text-xl mr-4" />
              <p className="text-base font-extralight">
                React - The Complete Guide 2024 (incl. Next.js, Redux) -{" "}
                <span className="italic font-extralight text-base">Coursera</span>
              </p>
            </div>
            <div className="flex flex-row items-center">
              <MdKeyboardDoubleArrowRight className="text-xl mr-4" />
              <p className="text-base font-extralight">
                NodeJS - The Complete Guide (MVC, REST APIs, GraphQL) -{" "}
                <span className="italic font-extralight text-base">Coursera</span>
              </p>
            </div>
            <div className="flex flex-row items-center">
              <MdKeyboardDoubleArrowRight className="text-xl mr-4" />
              <p className="text-base font-extralight">
                Figma UI UX Design Essentials - <span className="italic font-extralight text-base">Coursera</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ++++++++++++++ Second Grid  ++++++++++++++ */}
      <div className="grid lg:grid-cols-12 gap-7 min-h-12 lg:h-[200px]  mb-20">
        {/* ---------- Profile Section ---------- */}
        <div
          className="min-h-20 col-span-12  lg:col-span-7 px-12 lg:px-6 py-8 lg:py-2 flex flex-col justify-center items-center "
          id={styles.boxContainer}
          data-aos="zoom-in-up"
        >
          <div className="flex flex-row flex-wrap justify-around text-6xl gap-4 lg:gap-2 text-gray-200 w-full ">
            <a href="https://github.com/Ayeshan-Oshitha" target="_blank">
              <FaSquareGithub className="hover:text-purple-300 transform transition-transform duration-700 hover:scale-125" />{" "}
            </a>
            <a href="https://www.linkedin.com/in/oshitha-costa-740167325/" target="_blank">
              <FaLinkedin className="hover:text-purple-300 transform transition-transform duration-700 hover:scale-125" />
            </a>
            <a href="https://www.behance.net/ayeshan_oshitha" target="_blank">
              {" "}
              <FaSquareBehance className="hover:text-purple-300 transform transition-transform duration-700 hover:scale-125" />
            </a>
            <a href="" target="_blank">
              {" "}
              <FaStackOverflow className="hover:text-purple-300 transform transition-transform duration-700 hover:scale-125" />
            </a>
            <a href="" target="_blank">
              {" "}
              <IoLogoMedium className="hover:text-purple-300 transform transition-transform duration-700 hover:scale-125" />
            </a>
            <a href="https://www.fiverr.com/ayeshan_27?public_mode=true" target="_blank">
              {" "}
              <SiFiverr className="hover:text-purple-300 transform transition-transform duration-700 hover:scale-125" />
            </a>
            <a href="https://www.upwork.com/freelancers/~017985443d957402c2?mp_source=share" target="_blank">
              {" "}
              <FaSquareUpwork className="hover:text-purple-300 transform transition-transform duration-700 hover:scale-125" />
            </a>
          </div>
        </div>

        {/* ---------- Contact Section ---------- */}
        <div className="min-h-20 col-span-12  lg:col-span-5  px-12 lg:px-6 py-2 " data-aos="zoom-in-up" id={styles.boxContainer}>
          <div className=" flex flex-row justify-between items-end  w-full pb-5">
            <div className="flex flex-row flex-wrap lg:flex-col mt-4">
              <p className=" text-3xl font-medium tracking-wide">Let's Work </p>
              <p className="text-3xl pl-2 lg:pl-16 font-medium tracking-wide">Together...!</p>
            </div>
          </div>
          <NavLink
            to="/contact"
            className="flex flex-row flex-grow lg:mt-8 lg:mb-2 justify-between items-center w-full  hover:text-purple-400 transform transition-transform duration-500 hover:scale-105"
          >
            <p className="text-md tracking-wide">Get in Touch</p>
            <LiaArrowCircleRightSolid className="text-3xl " />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default About;

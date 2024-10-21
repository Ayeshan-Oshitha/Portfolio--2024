import React from "react";
import styles from "../styles/Container.module.css";
import Image from "../assets/images/Home/ProfileImg.jpg";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ image, name, country, projectType, review }) => {
  return (
    <>
      <div className="z-0 w-96  min-h-[500px]  p-3 " id={styles.boxContainer} data-aos="fade-up" data-aos-duration="400">
        <div className="w-full flex flex-col items-center">
          <img src={image} className="w-24 rounded-full mt-3 " />
          <p className="mt-6 text-2xl">{name}</p>
          <p className="mt-1 text-sm text-gray-400 font-semibold tracking-wider">{country}</p>
          <div className="flex flex-row gap-1 mt-7 mb-4">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <p className="mt-3 text-xl">Project type</p>
          <p className="mt-1 text-sm text-gray-400 font-medium tracking-wider">{projectType}</p>
          <div className="mt-5 mb-5 text-center text-sm font-light tracking-wide mx-3 overflow-hidden">{review}</div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;

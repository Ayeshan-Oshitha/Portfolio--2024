import React, { useState } from "react";
import styles from "../styles/Container.module.css";
import image1 from "../assets/images/Home/SampleProjectImg.png";

import { MdOutlineArrowCircleRight } from "react-icons/md";

const GraphicProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Animation state

  const handleNextImage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === project.img.length - 1 ? 0 : prevIndex + 1));
      setIsAnimating(false);
    }, 300); // Adjust the timeout to match the transition duration
  };

  const handlePrevImage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.img.length - 1 : prevIndex - 1));
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      <div className=" w-[390px]  h-[550px] p-3  " id={styles.boxContainer} data-aos="fade-up" data-aos-duration="400">
        <div className="w-full flex flex-col h-full flex-grow items-center p-3  ">
          <img
            src={project.img[currentImageIndex]}
            className={` rounded-2xl  transition-transform duration-75 ease-in-out transform ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          />

          <div className="flex justify-between w-full  mt-2">
            <button onClick={handlePrevImage} className="text-white ">
              <MdOutlineArrowCircleRight className="text-2xl rotate-180" />
            </button>
            <button onClick={handleNextImage} className="text-white">
              <MdOutlineArrowCircleRight className="text-2xl" />
            </button>
          </div>

          <p className="mt-6 self-start font-medium tracking-wider text-xl">{project.name}</p>
          <div className="mt-5 self-start  text-sm font-light tracking-wide  overflow-auto custom-scrollbar ">
            <p className="mb-5 mr-5 ">{project.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicProjectCard;

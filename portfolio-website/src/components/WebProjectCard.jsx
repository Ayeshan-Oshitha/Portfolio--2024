import React, { useState } from "react";
import styles from "../styles/Container.module.css";
import GraphicProjectImg from "../assets/images/Home/GraphicProjectImg.jpg";

import { IoClose } from "react-icons/io5";
import { MdOutlineArrowCircleRight } from "react-icons/md";

import Pro1img1 from "../assets/images/GraphicProjects/Pro1img1.webp";
import Pro1img2 from "../assets/images/GraphicProjects/Pro1img2.webp";
import Pro1img3 from "../assets/images/GraphicProjects/Pro1img3.webp";
import Pro1img4 from "../assets/images/GraphicProjects/Pro1img4.webp";
import Pro1img5 from "../assets/images/GraphicProjects/Pro1img5.webp";

import Pro2img1 from "../assets/images/GraphicProjects/Pro2img1.webp";
import Pro2img2 from "../assets/images/GraphicProjects/Pro2img2.webp";

import Pro3img1 from "../assets/images/GraphicProjects/Pro3img1.webp";
import Pro3img2 from "../assets/images/GraphicProjects/Pro3img2.webp";
import Pro3img3 from "../assets/images/GraphicProjects/Pro3img3.webp";

const WebProjectCard = ({ project }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState(null); // Store the index of the selected image

  const handleViewMore = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const handleImgClick = (index) => {
    setSelectedImgIndex(index); // Set the selected image's index for fullscreen view
  };

  const closeFullscreen = () => {
    setSelectedImgIndex(null); // Close fullscreen view
  };

  const handlePrevImage = () => {
    // Move to the previous image
    setSelectedImgIndex((prevIndex) => (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    // Move to the next image
    setSelectedImgIndex((prevIndex) => (prevIndex === project.images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div
        data-aos="zoom-in-up"
        className=" w-full lg:w-[450px]  lg:h-[540px] border-purple-300 border-2  "
        style={{
          backgroundColor: "var(--boxBackground)",
          borderRadius: "var(--boxBorderRadius)",
        }}
      >
        <div className="flex flex-col items-center w-full h-full  ">
          <img src={project.cover} className=" w-full h-1/2 object-cover  rounded-t-[12px] object-top" />
          <p className="mt-4 text-2xl text-purple-400 font-medium tracking-wider">{project.title}</p>
          <p className="mt-2 text-gray-400">{project.mainCateogary}</p>
          <p className="mt-2 text-lg">{project.type}</p>
          <hr className="w-4/5 border-gray-300 mt-6" />
          <p className="text-base mt-4 tracking-wider">{project.endDate}</p>
          <button onClick={handleViewMore} className="mt-4 mb-4 bg-purple-500 px-3 py-2 rounded-lg hover:bg-purple-700">
            View More
          </button>

          {showOverlay && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 z-50 py-12  ">
              <div
                className=" rounded-lg shadow-lg  w-5/6 h-[600px]  relative overflow-auto custom-scrollbar "
                id={styles.boxContainer}
                data-aos="zoom-in"
              >
                <div className="p-6 flex flex-col items-center h-full ">
                  <button
                    onClick={handleCloseOverlay}
                    className="absolute top-6 right-6 text-white bg-red-500 hover:bg-red-600 rounded-full  p-1 text-3xl"
                  >
                    <IoClose />
                  </button>

                  <p className="text-3xl tracking-wider ">{project.title}</p>
                  <p className="text-base tracking-wider mt-3 font-light">{project.mainCateogary}</p>
                  <p className="self-start mt-4 text-lg font-light tracking-wider text-purple-400">{project.type}</p>
                  <p className="mt-4 mr-4 self-start font-light text-justify ">{project.description}</p>

                  <div className="h-fit mt-6 mb-4 flex flex-row flex-wrap gap-4 tracking-wide font-light">
                    {project.techStack.map((technology, index) => (
                      <p key={index} className="bg-purple-600 text-base px-4 py-1 rounded-lg">
                        {technology}
                      </p>
                    ))}
                  </div>

                  <p className="mt-4 text-base tracking-wide">
                    <span className="font-medium">Status : </span>
                    <span className="font-light">{project.status}</span>
                  </p>
                  <p className=" text-base tracking-wide">
                    <span className="font-medium">Started Date : </span>
                    <span className="font-light">{project.startDate}</span>
                  </p>
                  <p className=" text-base tracking-wide">
                    <span className="font-medium">End Date : </span>
                    <span className="font-light">{project.endDate}</span>
                  </p>

                  <div className="flex flex-row flex-wrap mt-16 gap-4 justify-center">
                    {project.images.map((img, index) => (
                      <img key={index} src={img} className="w-52 mb-6 cursor-pointer" onClick={() => handleImgClick(index)} />
                    ))}
                  </div>

                  {selectedImgIndex !== null && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 lg:mx-20 lg:my-12">
                      <button
                        onClick={closeFullscreen}
                        className="absolute top-6 right-6 text-white bg-red-500 hover:bg-red-600 rounded-full p-1 text-3xl"
                      >
                        <IoClose />
                      </button>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-6 text-white bg-gray-700  rounded-full p-2 text-xl"
                      >
                        <MdOutlineArrowCircleRight className="text-2xl rotate-180" />
                      </button>
                      <img
                        src={project.images[selectedImgIndex]}
                        alt="Fullscreen Project"
                        className="max-w-full max-h-full object-contain"
                      />
                      <button
                        onClick={handleNextImage}
                        className="absolute right-6 text-white bg-gray-700  rounded-full p-2 text-xl"
                      >
                        <MdOutlineArrowCircleRight className="text-2xl" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WebProjectCard;

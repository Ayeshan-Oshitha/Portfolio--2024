import React, { useEffect, useState } from "react";
import styles from "../styles/Container.module.css";

import { IoClose } from "react-icons/io5";

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
    const imageViewerUrl = `/image-viewer?index=${index}`;
    const imageData = JSON.stringify(project.images);
    localStorage.setItem("images", imageData); // Use localStorage to pass data between tabs
    window.open(imageViewerUrl, "_blank");
  };

  return (
    <>
      <div
        className=" w-full lg:w-[450px] lg:h-[540px] border-purple-300 border-2  "
        style={{
          backgroundColor: "var(--boxBackground)",
          borderRadius: "var(--boxBorderRadius)",
        }}
      >
        <div className=" flex flex-col items-center w-full h-full  ">
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
            <div className=" fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 py-4  lg:py-12     ">
              <div
                className=" rounded-lg shadow-lg  w-5/6 h-full lg:h-[600px]   overflow-auto custom-scrollbar  "
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
                      <img key={index} src={img} className="w-52 mb-6 cursor-pointer" />
                    ))}
                  </div>
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

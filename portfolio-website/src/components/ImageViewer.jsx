import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineArrowCircleRight, MdOutlineArrowCircleLeft } from "react-icons/md";

const ImageViewer = ({ images, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : parseInt(prevIndex) - 1));
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : parseInt(prevIndex) + 1));
  };

  useEffect(() => {
    const url = new URL(window.location);
    url.searchParams.set("index", currentIndex); // Update the 'index' query parameter
    window.history.pushState({}, "", url); // Update the URL without reloading the page
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <img
        src={images[currentIndex]}
        alt="Fullscreen"
        className="max-w-full max-h-full object-contain"
        style={{ width: "100%", height: "100%" }}
      />
      <button
        onClick={handlePrevImage}
        className="absolute left-6 text-white text-4xl bg-gray-800 p-2 rounded-full hover:bg-gray-600"
      >
        <MdOutlineArrowCircleRight className="rotate-180" />
      </button>
      <button
        onClick={handleNextImage}
        className="absolute right-6 text-white text-4xl bg-gray-800 p-2 rounded-full hover:bg-gray-600"
      >
        <MdOutlineArrowCircleRight />
      </button>
      <button
        onClick={() => window.close()}
        className="absolute top-6 right-6 text-white text-3xl bg-red-500 p-2 rounded-full hover:bg-red-600"
      >
        <IoClose />
      </button>
    </div>
  );
};

export default ImageViewer;

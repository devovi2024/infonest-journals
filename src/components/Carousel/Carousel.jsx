import React, { useState, useEffect } from "react";
import {
  PlayIcon,
  BoltIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const VideoModal = ({ isOpen, videoUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 text-2xl"
          aria-label="Close video modal"
        >
          &times;
        </button>
        <div className="relative">
          <iframe
            src={videoUrl}
            title="Video Player"
            className="w-full h-80"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const Slide = ({ slide, onPlayVideo }) => (
  <div className="w-full px-2">
    <div className="relative">
      <img
        src={slide.image}
        alt={slide.title1}
        className="w-full h-80 object-cover rounded-lg"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg">
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => onPlayVideo(slide.videoUrl)}
            className="bg-pink-500 rounded-full p-2 cursor-pointer"
            aria-label="Play video"
          >
            <PlayIcon className="h-5 w-5 text-white" />
          </button>
          <div className="bg-pink-500 rounded-full p-2">
            <BoltIcon className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="text-white">
          <p className="text-xs uppercase">
            {slide.category} / {slide.date}
          </p>
          <h2 className="text-lg font-bold mt-1">{slide.title1}</h2>
        </div>
      </div>
    </div>
  </div>
);

const Carousel = ({ posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [slidesPerView, setSlidesPerView] = useState(2);

  const groupedSlides = [];
  for (let i = 0; i < posts.length; i += slidesPerView) {
    groupedSlides.push(posts.slice(i, i + slidesPerView));
  }

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 2);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === groupedSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? groupedSlides.length - 1 : prev - 1
    );
  };

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  return (
    <div className="relative">
      <VideoModal
        isOpen={isModalOpen}
        videoUrl={currentVideo}
        onClose={closeModal}
      />

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {groupedSlides.map((group, index) => (
            <div key={index} className="flex min-w-full gap-4 px-2">
              {group.map((slide, i) => (
                <Slide key={i} slide={slide} onPlayVideo={openModal} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-r-md shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-l-md shadow-md"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default Carousel;

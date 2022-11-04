import React, { useEffect, useRef, useState } from "react";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";

let count = 0;
let slideInterval;

const Slider = () => {
  const galery = [
    "/galery/slider1.jpg",
    "/galery/slider2.jpg",
    "/galery/slider3.jpg",
    "/galery/slider4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("animate-sliderImg");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 4000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % galery.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("animate-sliderImg");
  };
  const handleOnPrevClick = () => {
    count = (currentIndex + galery.length - 1) % galery.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("animate-sliderImg");
  };

  return (
    <div
      ref={slideRef}
      className="w-full lg:h-[450px] md:h-[300px] h-[280px] select-none relative overflow-hidden flex justify-center items-center "
    >
      <img
        src={process.env.PUBLIC_URL + galery[currentIndex]}
        alt=""
        className=" object-cover h-full w-full "
        loading="lazy"
      />
      <div className=" text-white absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-5 ">
        <button
          className=" transition lg:w-10 lg:h-10 md:w-7 md:h-7 w-5 h-5 bg-[#151515] border-2 border-white rounded-full flex justify-center items-center lg:text-base md:text-xs text-base hover:bg-gradient-to-r from-[#3B2623] to-[#C02D31] "
          onClick={handleOnPrevClick}
        >
          <ImArrowLeft />
        </button>
        <button
          className=" transition lg:w-10 lg:h-10 md:w-7 md:h-7 w-5 h-5 bg-[#151515] border-2 border-white rounded-full flex justify-center items-center lg:text-base md:text-xs text-base hover:bg-gradient-to-r from-[#3B2623] to-[#C02D31] "
          onClick={handleOnNextClick}
        >
          <ImArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;

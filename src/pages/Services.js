import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";

let count = 0;

const Services = () => {
  const { ref, inView } = useInView();

  const [currentIndex, setCurrentIndex] = useState(0);
  const serviceItems = useRef();

  const handleOnNextClick = () => {
    count = (count + 1) % items.length;
    setCurrentIndex(count);
    serviceItems.current.classList.add("animate-sliderImg");
  };

  const handleOnPrevClick = () => {
    count = (currentIndex + items.length - 1) % items.length;
    setCurrentIndex(count);
    serviceItems.current.classList.add("animate-sliderImg");
  };

  const items = [
    [
      "/galery/slider1.jpg",
      "Meeting, Incentive, Conference & Exhibition",
      "We can made good Meetings and Conferences that your company need.",
    ],
    [
      "/galery/slider2.jpg",
      "Tour & Travel",
      "We can made good Entertainment that your company need.",
    ],
    [
      "/galery/slider3.jpg",
      "Creative Studio",
      "We can made good Gathering that your company need.",
    ],
    [
      "/galery/slider4.jpg",
      "Digital Printing & Production",
      "We can made good Meetings and Conferences that your company need.",
    ],
  ];

  return (
    <section
      className=" flex flex-col w-full h-screen text-white  justify-center items-center font-Poppins space-y-12 "
      id="Services"
    >
      <tittle
        className={
          inView
            ? " flex flex-col items-center font-Poppins font-bold md:text-xl text-sm animate-tittleText "
            : " flex flex-col items-center font-Poppins font-bold md:text-xl text-sm "
        }
        ref={ref}
      >
        <p className="text-[#C02D31] uppercase ">
          Our <span className=" text-white ">Services</span>
        </p>
        <div className=" h-[1px] md:w-44 w-28 bg-white "></div>
      </tittle>

      {/* large website */}
      <div
        className={
          inView
            ? "lg:flex hidden items-center justify-center w-full h-10/12 animate-tittleText "
            : "lg:flex hidden items-center justify-center w-full h-10/12  "
        }
      >
        {items.map((item, index) => (
          <div
            className={
              index === 3
                ? "flex flex-1 overflow-hidden bg-black h-full transition-all duration-[1000ms] hover:scale-105 hover:z-[3] hover:bg-[#151515] relative origin-right "
                : "flex flex-1 overflow-hidden bg-black h-full transition-all duration-[1000ms] hover:scale-105 hover:z-[3] hover:bg-[#151515] relative "
            }
            key={index}
          >
            <img
              src={process.env.PUBLIC_URL + item[0]}
              alt=""
              className=" w-full h-full object-cover opacity-20 "
              loading="lazy"
            />
            <div className=" w-full h-full p-12 absolute flex flex-col ">
              <pages className=" text-base ">0{index + 1}</pages>
              <tittle className=" font-bold w-5/6 text-base mt-2 ">
                {item[1]}
              </tittle>
              <desc className=" absolute right-0 bottom-0 p-12 text-right w-5/6 text-xs ">
                {item[2]}
              </desc>
            </div>
          </div>
        ))}
      </div>

      {/* medium website */}
      <div className="lg:hidden flex items-center justify-center w-full  md:px-14 px-8 h-4/6 ">
        <div
          className={
            inView
              ? "flex flex-1 overflow-hidden bg-black h-full animate-tittleText transition-all duration-[1000ms] hover:scale-105 hover:z-[3]  hover:bg-[#151515] relative "
              : "flex flex-1 overflow-hidden bg-black h-full transition-all duration-[1000ms] hover:scale-105 hover:z-[3]  hover:bg-[#151515] relative "
          }
          ref={serviceItems}
        >
          <img
            src={process.env.PUBLIC_URL + items[currentIndex][0]}
            alt=""
            className=" w-full h-full object-cover opacity-20 "
            loading="lazy"
          />
          <div className=" w-full h-full md:p-12 p-8 absolute flex flex-col ">
            <pages className=" md:text-xl text-base ">
              0{currentIndex + 1}
            </pages>
            <tittle className=" font-bold w-5/6 md:text-xl text-sm mt-2 ">
              {items[currentIndex][1]}
            </tittle>
            <desc className=" absolute right-0 bottom-0 md:p-12 p-8 text-right md:text-sm text-[9px] w-5/6 ">
              {items[currentIndex][2]}
            </desc>
          </div>
          <div className=" text-white absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-5 ">
            <button
              className=" transition lg:w-10 lg:h-10 md:w-10 md:h-10 w-6 h-6 bg-[#151515] border-2 border-white rounded-full flex justify-center items-center md:text-xs text-[9px] hover:bg-gradient-to-r from-[#3B2623] to-[#C02D31] "
              onClick={handleOnPrevClick}
            >
              <ImArrowLeft />
            </button>
            <button
              className=" transition lg:w-10 lg:h-10 md:w-10 md:h-10 w-6 h-6 bg-[#151515] border-2 border-white rounded-full flex justify-center items-center md:text-xs text-[9px] hover:bg-gradient-to-r from-[#3B2623] to-[#C02D31] "
              onClick={handleOnNextClick}
            >
              <ImArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

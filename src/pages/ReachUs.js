import React from "react";
import { useInView } from "react-intersection-observer";

const ReachUs = () => {
  const { ref, inView } = useInView();
  return (
    <section
      className=" w-full h-screen flex justify-center items-center font-Poppins "
      id="ReachUs"
    >
      <div className="w-full h-screen absolute">
        <img
          className="w-full h-full object-cover "
          src={process.env.PUBLIC_URL + "/jumbotron/Reachus.png"}
          alt=""
        />
      </div>
      <div
        className="  md:w-[1550px] w-[570px] md:px-14 px-8 flex flex-col justify-center items-center h-screen  text-white  relative "
        ref={ref}
      >
        <tittle
          className={
            inView
              ? " flex flex-col items-center font-bold md:text-xl text-base animate-tittleText h-10 "
              : " flex flex-col items-center font-bold md:text-xl text-base h-10 "
          }
          ref={ref}
        >
          <p className="text-[#C02D31] uppercase  ">
            Reach <span className=" text-white ">us!</span>
          </p>
          <div className=" h-[1px] md:w-36 w-28 bg-white "></div>
        </tittle>
        <div
          className={
            inView
              ? " flex md:flex-row flex-col w-full h-auto text-white lg:mt-14 md:mt-8 mt-5 md:space-x-10 space-x-0 md:animate-fadeIn animate-tittleText "
              : " flex md:flex-row flex-col w-full h-auto text-white lg:mt-14 md:mt-8 mt-5 md:space-x-10 space-x-0 "
          }
        >
          <div className=" flex md:w-[75%] w-full h-full ">
            <div className=" flex w-[100%] h-full md:flex-col flex-row md:space-y-[0.35rem] space-y-0 md:justify-start justify-between ">
              <p className=" uppercase font-bold md:text-lg text-sm ">
                Company
              </p>
              <p className=" md:text-base text-xs ">PT. Negeri Kolam Susu</p>
            </div>
            <div className=" md:flex hidden w-auto h-full flex-col space-y-[0.35rem] text-right ">
              <p className=" uppercase font-bold md:text-lg text-sm  ">
                Office
              </p>
              <p className=" md:text-xs text-[10px] ">
                Jalan Tebet Raya Nomor 17, Tebet Barat, Jakarta Selatan, DKI
                Jakarta,, 12810
              </p>
            </div>
          </div>
          <div className=" flex md:w-[20%] w-full h-full text-right md:space-x-0 space-x-3 md:mt-0 mt-4 ">
            <div className=" md:hidden flex w-auto h-full flex-col space-y-[0.35rem] text-left ">
              <p className=" uppercase font-bold md:text-lg text-sm  ">
                Office
              </p>
              <p className=" md:text-xs text-[10px] ">
                Jalan Tebet Raya Nomor 17, Tebet Barat, Jakarta Selatan, DKI
                Jakarta,, 12810
              </p>
            </div>
            <div className=" flex flex-col space-y-[0.35rem] text-right ">
              <p className=" uppercase font-bold md:text-lg text-sm  ">
                Workshop
              </p>
              <p className=" md:text-xs text-[10px] ">
                Ruko Ifolia, Blokk HY46/68, Harapan Indah, Pusaka Rakyat,
                Bekasi, Jawa Barat, 17214
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            inView
              ? " flex flex-col w-full h-auto text-white space-y-2 lg:mt-8 mt-6 animate-fadeIn "
              : " flex flex-col w-full h-auto text-white space-y-2 lg:mt-8 mt-6 "
          }
        >
          <p className=" text-bold md:text-lg text-sm font-bold italic ">
            Have a question in mind ?
          </p>
          <p className=" md:text-sm text-[9px] ">
            Fill the field bellow and describe your needs. In return we will
            contact you as soon as possible.
          </p>
        </div>
        <div
          className={
            inView
              ? " flex w-full md:h-[40%] h-[38%] text-white lg:mt-14 md:mt-10 mt-5 animate-fadeRight "
              : " flex w-full md:h-[40%] h-[38%] text-white lg:mt-14 md:mt-10 mt-5 "
          }
        >
          <form action="" className="flex flex-col w-full space-y-6 ">
            <div className=" flex md:w-[75%] w-full justify-between ">
              <input
                type="text"
                placeholder="Name *"
                className="flex w-[47%] bg-transparent border-b-2 border-white placeholder:text-white p-2 focus:border-[#C02D31] focus:outline-none lg:text-base md:text-sm text-xs "
              />
              <input
                type="text"
                placeholder="Email *"
                className="flex w-[47%] bg-transparent border-b-2 border-white placeholder:text-white p-2 focus:border-[#C02D31] focus:outline-none lg:text-base md:text-sm text-xs "
              />
            </div>

            <input
              type="text"
              placeholder="Subject *"
              className="flex md:w-[47%] w-full  bg-transparent border-b-2 border-white placeholder:text-white p-2 focus:border-[#C02D31] focus:outline-none lg:text-base md:text-sm text-xs "
            />
            <textarea
              type="text"
              placeholder="Your Message"
              className=" flex flex-1 bg-transparent border-b-2 md:w-[75%] w-full resize-none border-white placeholder:text-white p-2 focus:border-[#C02D31] focus:outline-none lg:text-base md:text-sm text-xs "
            />
            <div className=" flex justify-end items-center space-x-4 font-bold lg:text-base md:text-sm text-xs ">
              <p>SEND</p>
              <button
                type="submit"
                className=" md:w-12 md:h-12 w-9 h-9  border-2 border-white rounded-full flex justify-center items-center hover:bg-gradient-to-r from-[#3B2623] to-[#C02D31] "
              >
                <img
                  src={process.env.PUBLIC_URL + "/logo/send.png"}
                  alt=""
                  className=" w-3 h-auto "
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;

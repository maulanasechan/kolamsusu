import React from "react";
import { useInView } from "react-intersection-observer";
import second from "react";

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
          src={process.env.PUBLIC_URL + "/jumbotron/ReachUs.png"}
          alt="/"
        />
      </div>
      <div
        className="  md:w-[1550px] w-[570px] md:px-14 px-8 flex flex-col items-center h-screen py-[80px] text-white  relative "
        ref={ref}
      >
        <tittle
          className={
            inView
              ? " flex flex-col items-center font-bold text-xl animate-tittleText h-10 "
              : " flex flex-col items-center font-bold text-xl h-10 "
          }
          ref={ref}
        >
          <p className="text-[#C02D31] uppercase  ">
            Reach <span className=" text-white ">us!</span>
          </p>
          <div className=" h-[1px] w-36 bg-white "></div>
        </tittle>
        <div className=" flex w-full h-auto text-white md:mt-12 mt-10 space-x-10 ">
          <div className=" flex w-[75%] h-full ">
            <div className=" flex w-[100%] h-full flex-col space-y-[0.35rem] ">
              <p className=" uppercase font-bold md:text-lg text-sm ">
                Company
              </p>
              <p className=" md:text-base text-sm ">PT. Negeri Kolam Susu</p>
            </div>
            <div className=" flex w-auto h-full flex-col space-y-[0.35rem] text-right ">
              <p className=" uppercase font-bold md:text-lg text-sm  ">
                Office
              </p>
              <p className=" md:text-xs text-[10px] ">
                Jalan Tebet Raya Nomor 17, Tebet Barat, Jakarta Selatan, DKI
                Jakarta,, 12810
              </p>
            </div>
          </div>
          <div className=" flex w-[20%] h-full flex-col space-y-[0.35rem] text-right ">
            <p className=" uppercase font-bold md:text-lg text-sm  ">
              Workshop
            </p>
            <p className=" md:text-xs text-[10px] ">
              Ruko Ifolia, Blokk HY46/68, Harapan Indah, Pusaka Rakyat, Bekasi,
              Jawa Barat, 17214
            </p>
          </div>
        </div>
        <div className=" flex flex-col w-full h-auto text-white space-y-2 mt-8">
          <p className=" text-bold md:text-lg text-base font-bold italic ">
            Have a question in mind ?
          </p>
          <p className=" md:text-sm text-xs ">
            Fill the field bellow and describe your needs. In return we will
            contact you as soon as possible.
          </p>
        </div>
        <div className=" flex w-full h-full  text-white space-y-2 mt-12   ">
          <form action="" className="flex flex-col w-full space-y-12 ">
            <div className=" flex md:w-[75%] w-full justify-between ">
              <input
                type="text"
                placeholder="Name *"
                className="flex w-[47%] bg-transparent border-b-2 border-white placeholder:text-white p-2 focus:border-[#C02D31] focus:outline-none "
              />
              <input
                type="text"
                placeholder="Email *"
                className="flex w-[47%] bg-transparent border-b-2 border-white placeholder:text-white p-2 focus:border-[#C02D31] focus:outline-none "
              />
            </div>

            <input
              type="text"
              placeholder="Subject *"
              className="flex md:w-[47%] w-full  bg-transparent border-b-2 border-white placeholder:text-white p-2 focus:border-[#C02D31] focus:outline-none "
            />
            <textarea
              type="text"
              placeholder="Your Message"
              className=" flex flex-1 bg-transparent border-b-2 md:w-[75%] w-full resize-none h-full border-white placeholder:text-white p-2 focus:border-[#C02D31] focus:outline-none "
            />
            <div className=" flex justify-end items-center space-x-4 font-bold ">
              <p>SEND</p>
              <button
                type="submit"
                className=" w-12 h-12 border-2 border-white rounded-full flex justify-center items-center"
              >
                <img src={process.env.PUBLIC_URL + "/logo/send.png"} alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;

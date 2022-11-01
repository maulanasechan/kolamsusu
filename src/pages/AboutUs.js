import React from "react";
import { useInView } from "react-intersection-observer";
import Slider from "../components/Slider";

const AboutUs = () => {
  const { ref, inView } = useInView();

  return (
    <section
      className=" flex w-full h-screen text-white  justify-center items-center font-Poppins   "
      id="AboutUs"
    >
      <div className=" md:w-[1550px] w-[570px] md:px-14 px-8 flex flex-col justify-center items-center md:space-y-20 space-y-5 ">
        <tittle
          className=" w-full h-8 flex justify-between items-center font-Poppins font-bold md:text-xl text-base "
          ref={ref}
        >
          <div
            className={
              inView
                ? " h-[1px] md:w-10/12 w-7/12 bg-white origin-left animate-tittle "
                : " h-[1px] md:w-10/12 w-7/12 bg-white origin-left  "
            }
          ></div>
          <p
            className={
              inView
                ? "text-white uppercase animate-tittleText "
                : "text-white uppercase "
            }
          >
            About <span className=" text-[#C02D31] ">Us</span>
          </p>
        </tittle>

        <div className="flex md:space-x-10  md:flex-row flex-col  ">
          <div
            className={
              inView
                ? " flex flex-1  justify-center items-center md:animate-fadeIn animate-tittleText  "
                : " flex flex-1  justify-center items-center "
            }
            ref={ref}
          >
            <Slider />
          </div>
          <div
            className={
              inView
                ? " h-[400px] space-y-5 flex flex-1 md:justify-end justify-center md:animate-fadeRight animate-tittleText  "
                : " h-[400px] space-y-5 flex flex-1 md:justify-end justify-center "
            }
            ref={ref}
          >
            <div className="space-y-5 flex flex-col justify-center items-center md:mt-0 mt-5 max-w-[90%]  ">
              <h1 className=" font-bold lg:text-xl text-xs md:text-left text-center ">
                Negeri Kolam Susu (NKS) merupakan Event Organizer yang bergerak
                pada bidang{" "}
                <span className="italic">
                  Meeting, Incentive, Convention, and Exhibition
                </span>{" "}
                (MICE).
              </h1>
              <p className=" text-justify font-light lg:text-sm text-[9px] ">
                Berawal dari ‘keisengan’ mencoba platform live broadcasting
                untuk Online Game, kini NKS telah berevolusi menjadi
                penyelenggara event krusial seperti sidang dan konferensi
                Internasional & Nasional, pelatihan profesional tersertifikasi,
                berbagai macam hybrid event, gathering, acara musik & hiburan,
                tour & travel, hingga produksi film & animasi.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

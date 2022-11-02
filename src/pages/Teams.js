import React from "react";
import { useInView } from "react-intersection-observer";

const Teams = () => {
  const { ref, inView } = useInView();

  const teams = [
    ["/teams/team1.png", "Royal Ambarukmo"],
    ["/teams/team1.png", "Royal Ambarukmo"],
    ["/teams/team1.png", "Royal Ambarukmo"],
    ["/teams/team1.png", "Royal Ambarukmo"],
    ["/teams/team1.png", "Royal Ambarukmo"],
    ["/teams/team1.png", "Royal Ambarukmo"],
    ["/teams/team1.png", "Royal Ambarukmo"],
  ];

  // array of N elements, where N is the number of rows needed
  const tRows = [...Array(Math.ceil(teams.length / 3))];
  // chunk the products into the array of rows
  const teamsRows = tRows.map((row, index) =>
    teams.slice(index * 3, index * 3 + 3)
  );
  const contentTeams = teamsRows.map((row, idx) => (
    <div className=" flex w-full justify-between items-center " key={idx}>
      {row.map((product, index) => (
        <img
          src={process.env.PUBLIC_URL + product[0]}
          key={index}
          alt=""
          className="h-auto w-[28%] cursor-pointer hover:opacity-20 hover:scale-110 transition-all duration-1000 "
        />
      ))}
    </div>
  ));
  return (
    <section
      className=" flex w-full text-white  justify-center items-center py-20 font-Poppins "
      id="Teams"
    >
      <div className=" md:w-[1550px] w-[570px] md:px-14 px-8 flex flex-col justify-center items-center">
        <tittle
          className=" w-full h-8 flex justify-between items-center font-bold md:text-xl text-sm "
          ref={ref}
        >
          <div
            className={
              inView
                ? " h-[1px] lg:w-10/12 w-7/12 bg-white origin-left animate-tittle "
                : " h-[1px] lg:w-10/12 w-7/12 bg-white origin-left  "
            }
          ></div>
          <p
            className={
              inView
                ? "text-[#C02D31] uppercase animate-tittleText "
                : "text-[#C02D31] uppercase "
            }
          >
            Our <span className=" text-white ">Teams</span>
          </p>
        </tittle>

        <div
          className={
            inView
              ? " flex md:flex-row flex-col w-full justify-between items-center lg:mt-16 md:mt-10 md:mb-20 mt-6 mb-10 animate-tittle md:animate-fadeIn "
              : " flex md:flex-row flex-col w-full justify-between items-center lg:mt-16 md:mt-10 md:mb-20 mt-6 mb-10 "
          }
        >
          <div className=" flex justify-start items-center md:w-2/3 w-full ">
            <p className=" lg:text-2xl md:text-xl text-sm ">
              perkenalkan, <br />
              <span className=" font-bold ">keluarga "kecil" NKS </span>
            </p>
          </div>
          <div className=" flex md:w-3/6 w-full md:flex-col md:justify-center md:items-end justify-between items-center md:space-y-6 md:space-x-0 space-x-5 mt-4 ">
            <p className=" md:text-right text-left lg:text-lg md:text-sm text-[8px] md:w-full w-1/2 ">
              di NKS, kami percaya bahwa tim yang{" "}
              <span className=" font-bold ">besar </span>
              tidak harus miliki jumlah personel yang “besar” juga, cukup dengan
              orang-orang <span className=" font-bold underline ">
                terbaik
              </span>{" "}
              di tiap bidangnya.
            </p>
            <p className=" text-right lg:text-sm md:text-[10px] text-[6px] md:w-full w-1/3 ">
              hal itulah yang membuat NKS dapat menekan biaya dengan tetap
              memberi kualitas <span className=" font-bold ">terbaik</span> dari
              produk yang kami berikan!
            </p>
            <div className=" md:flex hidden w-3/5 h-[2px] bg-white rounded-full "></div>
          </div>
        </div>
        <div
          className={
            inView
              ? " md:space-y-16 space-y-8 w-full animate-tittleText "
              : " md:space-y-16 space-y-8 w-full "
          }
        >
          {contentTeams}
        </div>
      </div>
    </section>
  );
};

export default Teams;

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
          className=" w-full h-8 flex justify-between items-center font-bold text-xl "
          ref={ref}
        >
          <div
            className={
              inView
                ? " h-[1px] lg:w-10/12 w-8/12 bg-white origin-left animate-tittle "
                : " h-[1px] lg:w-10/12 w-8/12 bg-white origin-left  "
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

        <div className=" flex w-full justify-between items-center lg:my-24 my-12 ">
          <div className=" flex justify-start items-center ">
            <p className=" lg:text-2xl md:text-xl text-sm ">
              perkenalkan, <br />
              <span className=" font-bold ">keluarga "kecil" NKS </span>
            </p>
          </div>
          <div className=" flex w-3/6 flex-col justify-center items-end space-y-6 ">
            <p className=" text-right lg:text-lg md:text-sm text-[10px] ">
              di NKS, kami percaya bahwa tim yang{" "}
              <span className=" font-bold ">besar </span>
              tidak harus miliki jumlah personel yang “besar” juga, cukup dengan
              orang-orang <span className=" font-bold underline ">
                terbaik
              </span>{" "}
              di tiap bidangnya.
            </p>
            <p className=" text-right lg:text-sm md:text-[10px] text-[6px] ">
              hal itulah yang membuat NKS dapat menekan biaya dengan tetap
              memberi kualitas <span className=" font-bold ">terbaik</span> dari
              produk yang kami berikan!
            </p>
            <div className=" flex w-3/5 h-[2px] bg-white rounded-full "></div>
          </div>
        </div>
        <div className=" md:space-y-16 space-y-8 w-full ">{contentTeams}</div>
      </div>
    </section>
  );
};

export default Teams;

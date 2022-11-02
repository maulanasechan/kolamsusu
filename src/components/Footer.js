import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" fixed z-10 bottom-0 w-full md:h-10 h-8 bg-[#151515] rounded-t-[20px] shadow-[0px_0px_15px_8px_rgba(0,0,0,0.3)] flex justify-center font-Poppins text-white  ">
      <div className=" w-[1550px] h-full flex justify-center items-center px-14 space-x-4 ">
        <div className=" hidden md:flex-auto md:flex items-center lg:text-xs text-[10px] space-x-2 ">
          <img
            src={process.env.PUBLIC_URL + "/logo/copyright.png"}
            alt=""
            className=" w-3 h-3 "
          />
          <p>
            2022 PT Negeri Kolam Susu. All Right Reserved. Terms of Use. Privacy
            Policy.
          </p>
        </div>
        <div className=" md:flex-1 flex h-full md:justify-end justify-center items-center space-x-3  ">
          <button className="md:w-6 md:h-6 w-5 h-5 bg-gradient-to-r from-[#3B2623] to-[#C02D31] flex justify-center items-center rounded-full hover:opacity-40 ">
            <HiOutlineMail className=" md:text-xs text-[10px] " />
          </button>
          <button className="md:w-6 md:h-6 w-5 h-5 bg-gradient-to-r from-[#3B2623] to-[#C02D31] flex justify-center items-center rounded-full hover:opacity-40 ">
            <FaWhatsapp className=" md:text-xs text-[10px] " />
          </button>
          <button className="md:w-6 md:h-6 w-5 h-5 bg-gradient-to-r from-[#3B2623] to-[#C02D31] flex justify-center items-center rounded-full hover:opacity-40 ">
            <BsInstagram className=" md:text-xs text-[10px] " />
          </button>
          <button className="md:w-6 md:h-6 w-5 h-5 bg-gradient-to-r from-[#3B2623] to-[#C02D31] flex justify-center items-center rounded-full hover:opacity-40 ">
            <FaLinkedinIn className=" md:text-xs text-[10px] " />
          </button>
          <button className="md:w-6 md:h-6 w-5 h-5 bg-gradient-to-r from-[#3B2623] to-[#C02D31] flex justify-center items-center rounded-full hover:opacity-40 ">
            <IoLocationOutline className=" md:text-xs text-[10px] " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

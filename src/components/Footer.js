import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" fixed z-10 bottom-0 w-full h-10 bg-[#151515] rounded-t-[20px] shadow-[0px_0px_15px_8px_rgba(0,0,0,0.3)] flex justify-center font-Poppins text-white  ">
      <div className=" w-[1550px] h-10 flex justify-center items-center px-14 space-x-4 ">
        <div className=" hidden md:flex-auto md:flex items-center lg:text-xs text-[10px] space-x-2 ">
          <img src="/logo/copyright.png" alt="" className=" w-3 h-3 " />
          <p>
            2022 PT Negeri Kolam Susu. All Right Reserved. Terms of Use. Privacy
            Policy.
          </p>
        </div>
        <div className=" md:flex-1 flex h-full md:justify-end justify-center items-center space-x-3  ">
          <button className="w-6 h-6 bg-gradient-to-r from-[#3B2623] to-[#C02D31] flex justify-center items-center rounded-full hover:opacity-40 ">
            <HiOutlineMail className=" text-xs " />
          </button>
          <button className="w-6 h-6 bg-gradient-to-r from-[#3B2623] to-[#C02D31] flex justify-center items-center rounded-full hover:opacity-40 ">
            <FaWhatsapp className=" text-xs " />
          </button>
          <button className="w-6 h-6 bg-gradient-to-r from-[#3B2623] to-[#C02D31] flex justify-center items-center rounded-full hover:opacity-40 ">
            <BsInstagram className=" text-xs " />
          </button>
          <button className="w-6 h-6 bg-gradient-to-r from-[#3B2623] to-[#C02D31] flex justify-center items-center rounded-full hover:opacity-40 ">
            <FaLinkedinIn className=" text-xs " />
          </button>
          <button className="w-6 h-6 bg-gradient-to-r from-[#3B2623] to-[#C02D31] flex justify-center items-center rounded-full hover:opacity-40 ">
            <IoLocationOutline className=" text-xs " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

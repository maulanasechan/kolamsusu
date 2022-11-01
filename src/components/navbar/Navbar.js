import React, { useState } from "react";
import { BsMenuButtonWide, BsXCircle } from "react-icons/bs";
import { Link } from "react-scroll";

import "./navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className=" w-full md:h-14 h-10 bg-[#151515] rounded-b-[20px] flex items-center justify-center fixed top-0 z-10 shadow-[0px_0px_15px_8px_rgba(0,0,0,0.3)] font-Poppins text-white ">
      <div className=" md:w-[1550px] w-[570px] md:px-14 px-8 flex items-center justify-between ">
        <Link to="Home" spy={true} smooth={true} offset={0} duration={2000}>
          <img
            src={process.env.PUBLIC_URL + "/logo/logo.png"}
            alt=""
            className=" md:w-24 md:h-8 w-14 h-auto cursor-pointer "
          />
        </Link>
        <ul className="md:flex hidden flex-row md:space-x-4 lg:space-x-8 lg:text-lg text-base ">
          <li className=" nav-items cursor-pointer ">
            <Link to="Home" spy={true} smooth={true} offset={0} duration={2000}>
              Home
            </Link>
          </li>

          <li className=" nav-items cursor-pointer ">
            <Link
              to="AboutUs"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
            >
              About Us
            </Link>
          </li>

          <li className=" nav-items cursor-pointer ">
            <Link
              to="Services"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
              hashSpy={true}
            >
              Services
            </Link>
          </li>

          <li className=" nav-items cursor-pointer ">
            <Link
              to="Clients"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
            >
              Clients
            </Link>
          </li>

          <li className=" nav-items cursor-pointer ">
            <Link
              to="Teams"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
            >
              Teams
            </Link>
          </li>
        </ul>
        <Link to="ReachUs" spy={true} smooth={true} offset={0} duration={2000}>
          <button className=" w-[136px] h-8 text-white font-bold bg-gradient-to-r from-[#3B2623] to-[#C02D31] text-base rounded-full md:block hidden transition-all duration-[1000ms] hover:opacity-40 hover:scale-125 ">
            Reach Us!
          </button>
        </Link>

        <div
          onClick={() => setNav(!nav)}
          className="flex md:hidden cursor-pointer"
        >
          <BsMenuButtonWide
            size={15}
            className={
              nav
                ? "transition-all duration-[2000ms] opacity-0"
                : "transition-all duration-[2000ms] opacity-100 hover:scale-125 hover:text-[#C02D31]"
            }
          />
        </div>
        <div
          className={
            !nav
              ? "fixed top-0 w-[70%] h-full left-[-100%] ease-in-out duration-1000 delay-[1500ms] md:hidden block "
              : "fixed top-0 left-0 w-[70%] h-full border-r border-gray-900 bg-[#151515] ease-in-out duration-1000 delay-500 z-50 md:hidden block"
          }
        >
          <div className="flex items-center mt-3 w-full justify-between pl-8 pr-8">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
              onClick={() => setNav(!nav)}
            >
              <img
                src={process.env.PUBLIC_URL + "/logo/logo.png"}
                alt=""
                className=" w-14 h-auto cursor-pointer "
              />
            </Link>

            <BsXCircle
              size={15}
              className={
                !nav
                  ? "transition-all duration-[2000ms] opacity-0 cursor-pointer"
                  : "transition-all duration-[2000ms] opacity-100 cursor-pointer hover:scale-125 hover:text-[#C02D31]"
              }
              onClick={() => setNav(!nav)}
            />
          </div>

          <ul className="uppercase p-12 text-sm pl-8 pr-8 ">
            <li className="nav-items-sm">
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
                onClick={() => setNav(!nav)}
              >
                Home
              </Link>
            </li>
            <li className="nav-items-sm">
              <Link
                to="AboutUs"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
                onClick={() => setNav(!nav)}
              >
                About Us
              </Link>
            </li>
            <li className="nav-items-sm">
              <Link
                to="Services"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
                onClick={() => setNav(!nav)}
              >
                Services
              </Link>
            </li>
            <li className="nav-items-sm">
              <Link
                to="Clients"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
                onClick={() => setNav(!nav)}
              >
                Clients
              </Link>
            </li>
            <li className="nav-items-sm">
              <Link
                to="Teams"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
                onClick={() => setNav(!nav)}
              >
                Teams
              </Link>
            </li>
          </ul>
          <div className="px-8">
            <Link
              to="ReachUs"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
              onClick={() => setNav(!nav)}
            >
              <button className=" w-[136px] h-8 text-white font-bold bg-gradient-to-r from-[#3B2623] to-[#C02D31] text-base rounded-full md:hidden block hover:opacity-40 transition-all duration-[1000ms] hover:scale-125 ">
                Reach Us!
              </button>
            </Link>

            <div className=" flex w-full justify-center items-center text-white text-xs space-x-4 text-justify mt-8 ">
              <p>
                2022 Negeri Kolam Susu. All Right Reserved. Terms of Use.
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

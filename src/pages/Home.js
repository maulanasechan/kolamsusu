import React from "react";
import Typed from "react-typed";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView();
  return (
    <section
      className=" w-full h-screen flex justify-center items-center font-Poppins "
      id="Home"
    >
      <div className="w-full h-screen bg-black/10 absolute">
        <img
          className="w-full h-full object-cover mix-blend-soft-light "
          src={process.env.PUBLIC_URL + "/jumbotron/home.png"}
          alt="/"
        />
      </div>
      <div
        className="  md:w-[1550px] w-[570px] md:px-14 px-8  h-2/3 relative text-white flex "
        ref={ref}
      >
        <div
          className={
            inView
              ? " flex flex-col justify-end md:w-[600px] animate-fadeIn "
              : "flex flex-col justify-end md:w-[600px] "
          }
        >
          <h1 className=" font-bold md:text-2xl text-base ">
            Selamat datang di{" "}
            <Typed
              strings={["Negeri Kolam Susu!"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </h1>
          <p className=" font-light md:text-lg text-sm mt-2 ">
            Sebuah kolaborasi Industri Kreatif yang akan selalu menjadi solusi
            kebutuhan MICE{" "}
            <span className=" italic ">
              Event Organizer, Media Production, Tour & Travel,
            </span>{" "}
            dan Hiburan Anda!
          </p>
          <a
            href="/"
            className=" mt-10 underline font-medium md:text-lg text-xs "
          >
            Tonton{" "}
            <Typed
              strings={[" Portfolio Kami"]}
              typeSpeed={130}
              backSpeed={200}
              loop
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

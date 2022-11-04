import React from "react";
import { useInView } from "react-intersection-observer";

const Clients = () => {
  const { ref, inView } = useInView();

  const clients = [
    ["/clients/client1.png", "Kementerian Perhubungan"],
    ["/clients/client2.png", "KEMENPAREKRAF"],
    ["/clients/client3.png", "Kementerian Perindustrian"],
    ["/clients/client4.png", "TRAKINDO"],
    ["/clients/client5.png", "TNI Angakatan Laut"],
    ["/clients/client6.png", "International Maritime Organization"],
    ["/clients/client7.png", "ITS Surabaya"],
    ["/clients/client8.png", "Bank BNI"],
    ["/clients/client9.png", "JASAMARGA"],
    ["/clients/client10.png", "Samudra Indonesia"],
    ["/clients/client11.png", "DSM Biomedical"],
    ["/clients/client12.png", "AKUO Indonesia"],
    ["/clients/client13.png", "MOJ"],
    ["/clients/client14.png", "IKA ITS FTK "],
  ];

  // array of N elements, where N is the number of rows needed
  const cRows = [...Array(Math.ceil(clients.length / 4))];
  // chunk the products into the array of rows
  const clientRows = cRows.map((row, index) =>
    clients.slice(index * 4, index * 4 + 4)
  );
  const contentClients = clientRows.map((row, idx) => (
    <div
      className=" flex w-full justify-center lg:space-x-12 md:space-x-14 space-x-8 "
      key={idx}
    >
      {row.map((product, index) => (
        <article
          key={product}
          className=" flex justify-center items-center lg:w-[75px] lg:h-[75px] md:w-[60px] md:h-[60px]  w-[35px] h-[35px]  cursor-pointer text-white font-Poppins relative "
        >
          <img
            src={process.env.PUBLIC_URL + product[0]}
            alt=""
            className=" object-cover w-full h-full hover:opacity-0 "
            loading="lazy"
          />
          <div className=" absolute flex w-full h-full bg-[#151515] opacity-0 hover:opacity-100  justify-center items-center ">
            <p className=" text-center text-sm ">{product[1]}</p>
          </div>
        </article>
      ))}
    </div>
  ));

  const partners = [
    ["/partners/partners11.png", "Royal Ambarukmo"],
    ["/partners/partners1.png", "Marriott Bonvoy"],
    ["/partners/partners2.png", "All Accor Live Limitless"],
    ["/partners/partners3.png", "Renaissance"],
    ["/partners/partners4.png", "JW Marriott"],
    ["/partners/partners5.png", "Pullman"],
    ["/partners/partners6.png", "Four Points"],
    ["/partners/partners7.png", "Courtyard"],
    ["/partners/partners8.png", "Sheraton"],
    ["/partners/partners9.png", "Alila"],
    ["/partners/partners10.png", "Grand Mercure"],
  ];

  // array of N elements, where N is the number of rows needed
  const pRows = [...Array(Math.ceil(partners.length / 3))];
  // chunk the products into the array of rows
  const partnerRows = pRows.map((row, index) =>
    partners.slice(index * 3, index * 3 + 3)
  );
  const contentPartners = partnerRows.map((row, idx) => (
    <div className=" flex w-full justify-center space-x-12 " key={idx}>
      {row.map((product, index) => (
        <article
          key={index}
          className=" flex justify-center items-center w-[75px] h-[75px] cursor-pointer text-white font-Poppins relative "
        >
          <img
            src={process.env.PUBLIC_URL + product[0]}
            alt=""
            className=" object-cover w-full h-full hover:opacity-0 "
          />
          <div className=" absolute flex w-full h-full bg-[#151515] opacity-0 hover:opacity-100  justify-center items-center ">
            <p className=" text-center text-sm ">{product[1]}</p>
          </div>
        </article>
      ))}
    </div>
  ));

  // array of N elements, where N is the number of rows needed
  const pmRows = [...Array(Math.ceil(partners.length / 4))];
  // chunk the products into the array of rows
  const partnermRows = pmRows.map((row, index) =>
    partners.slice(index * 4, index * 4 + 4)
  );
  const contentmPartners = partnermRows.map((row, idx) => (
    <div
      className=" flex w-full justify-center md:space-x-8 space-x-6   "
      key={idx}
    >
      {row.map((product, index) => (
        <article
          key={index}
          className=" flex justify-center items-center md:w-[60px] md:h-[60px] w-[40px] h-[40px] cursor-pointer text-white font-Poppins relative "
        >
          <img
            src={process.env.PUBLIC_URL + product[0]}
            alt=""
            className=" object-cover w-full h-full hover:opacity-0 "
          />
          <div className=" absolute flex w-full h-full bg-[#151515] opacity-0 hover:opacity-100  justify-center items-center ">
            <p className=" text-center text-sm ">{product[1]}</p>
          </div>
        </article>
      ))}
    </div>
  ));

  return (
    <section
      id="Clients"
      className=" flex w-full h-screen text-white  justify-center items-center font-Poppins  "
    >
      <div className=" md:w-[1550px] w-[570px] md:p-14 p-8 flex flex-col justify-center items-center h-5/6  ">
        <tittle
          className=" w-full h-8 flex justify-between items-center font-Poppins font-bold md:text-xl text-sm "
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
                ? "text-[#C02D31] uppercase animate-tittleText text-right "
                : "text-[#C02D31] uppercase text-right "
            }
          >
            Our{" "}
            <span className=" text-white ">
              Client
              <br />
              <span className=" text-[#C02D31] "> & </span> Partners
            </span>
          </p>
        </tittle>
        <div
          className={
            inView
              ? " flex lg:flex-row flex-col w-full h-auto  justify-center items-center animate-tittleText lg:mt-40 mt-16 "
              : " flex lg:flex-row flex-col w-full h-auto  justify-center items-center lg:mt-40 mt-16 "
          }
        >
          <div className=" flex lg:w-[50%] w-full h-full flex-col lg:space-y-10 md:space-y-6 space-y-4 items-center justify-center ">
            {contentClients}
          </div>
          <div className=" flex lg:w-[3px] w-4/6 bg-white lg:h-3/6 h-[2px] rounded-full lg:mx-14 lg:my-0 my-7 "></div>
          <div className=" lg:flex hidden w-[50%] h-full flex-col justify-center items-center space-y-10 ">
            {contentPartners}
          </div>
          <div className=" lg:hidden flex w-full h-full flex-col justify-center items-center space-y-6 ">
            {contentmPartners}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

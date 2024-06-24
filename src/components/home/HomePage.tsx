"use client";
import AllImages from "@/constant/images";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Navbar from "../navbar/Navbar";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: false,
};

const HomePage = () => {
  return (
    <div className="relative">
      <Slider {...settings} className="h-full overflow-hidden">
        <div className="h-[100vh]">
          <Image
            src={AllImages?.HomePageBg1}
            alt="bg"
            className="h-full object-cover"
          />
        </div>
        <div className="h-[100vh]">
          <Image
            src={AllImages?.HomePageBg1}
            alt="bg"
            className="h-full object-cover"
          />
        </div>
        <div className="h-[100vh]">
          <Image
            src={AllImages?.HomePageBg1}
            alt="bg"
            className="h-full object-cover"
          />
        </div>
      </Slider>
      <div className="absolute bottom-[5px] left-0 w-full h-full bg-black/[0.70] flex flex-col justify-end p-10">
        <div className="w-full lg:max-w-[70%] md:mb-24 lg:mb-0">
          <div>
            <h1 className="text-xl md:text-4xl lg:text-6xl text-white font-extrabold">
              Outsource your equipment{" "}
              <span className="mt-2 md:mt-3 lg:mt-6 inline-block">
                purchasing with Backhouse
              </span>
            </h1>
          </div>
          <div className="w-full">
            <div className="h-1 bg-primary-10 w-[150px] md:w-[350px] lg:w-[500px] my-8"></div>
          </div>
          <h3 className="text-sm md:text-base lg:text-xl text-white font-bold w-[80%] lg:w-[75%]">
            Access proprietary pre-owned equipment opportunities to run a more a
            cost-effective kitchen
          </h3>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default HomePage;

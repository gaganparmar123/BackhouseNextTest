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
  autoplaySpeed: 2500,
  cssEase: "linear",
  pauseOnHover: false,
  fade: true,
};

const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* <Slider {...settings} className="h-full overflow-hidden">
        <div className="h-[100vh]">
          <Image
            src={AllImages?.HomePageBg1}
            alt="bg1"
            className="h-full object-cover"
          />
        </div>
        <div className="h-[100vh]">
          <Image
            src={AllImages?.HomePageBg2}
            alt="bg2"
            className="h-full object-cover"
          />
        </div>
        <div className="h-[100vh]">
          <Image
            src={AllImages?.HomePageBg3}
            alt="bg3"
            className="h-full object-cover"
          />
        </div>
        <div className="h-[100vh]">
          <Image
            src={AllImages?.HomePageBg4}
            alt="bg4"
            className="h-full object-cover"
          />
        </div>
        <div className="h-[100vh]">
          <Image
            src={AllImages?.HomePageBg5}
            alt="bg5"
            className="h-full object-cover"
          />
        </div>
        <div className="h-[100vh]">
          <Image
            src={AllImages?.HomePageBg6}
            alt="bg6"
            className="h-full object-cover"
          />
        </div>
        <div className="h-[100vh]">
          <Image
            src={AllImages?.HomePageBg7}
            alt="bg7"
            className="h-full object-cover"
          />
        </div>
      </Slider> */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 md:px-6 xl:mt-6 2xl:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4">
          <div className="xl:col-span-2">
            {/* <Image
              src={AllImages?.HomePage}
              alt="bg1"
              className="h-full object-cover rounded-lg"
            /> */}
            <Slider {...settings} className="h-full overflow-hidden home-slider">
              <div className="h-full">
                <Image
                  src={AllImages?.HomePageBg1}
                  alt="bg1"
                  className="h-full object-cover"
                />
              </div>
              <div className="h-full">
                <Image
                  src={AllImages?.HomePageBg2}
                  alt="bg2"
                  className="h-full object-cover"
                />
              </div>
              <div className="h-full">
                <Image
                  src={AllImages?.HomePageBg3}
                  alt="bg3"
                  className="h-full object-cover"
                />
              </div>
              <div className="h-full">
                <Image
                  src={AllImages?.HomePageBg4}
                  alt="bg4"
                  className="h-full object-cover"
                />
              </div>
              <div className="h-full">
                <Image
                  src={AllImages?.HomePageBg5}
                  alt="bg5"
                  className="h-full object-cover"
                />
              </div>
              <div className="h-full">
                <Image
                  src={AllImages?.HomePageBg6}
                  alt="bg6"
                  className="h-full object-cover"
                />
              </div>
              <div className="h-full">
                <Image
                  src={AllImages?.HomePageBg7}
                  alt="bg7"
                  className="h-full object-cover"
                />
              </div>
            </Slider>
          </div>
          <div className="xl:col-span-3">
            <div className="flex flex-col justify-end lg:pl-10 lg:py-10 pr-0 text-center lg:text-start">
              <div className="w-full xl:my-10 lg:mb-0">
                <div>
                  <h1 className="text-xl md:text-4xl/[60px] lg:text-5xl/[70px] xl:text-6xl/[80px] font-extrabold">
                    Outsource your equipment purchasing with {" "}
                    <span className="text-primary-10">
                      Backhouse
                    </span>
                  </h1>
                </div>
                <div className="w-full">
                  <div className="h-1 bg-primary-10 w-[150px] md:max-w-[350px] lg:w-[500px] my-4 lg:my-8 mx-auto lg:mx-0"></div>
                </div>
                <h3 className="text-sm md:text-base lg:text-xl font-bold w-[80%] lg:w-[75%] mx-auto lg:mx-0">
                  Access proprietary pre-owned equipment opportunities to run a more a
                  cost-effective kitchen
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

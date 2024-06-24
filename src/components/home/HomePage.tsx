"use client";
import AllImages from "@/constant/images";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

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
    <div className="h-[calc(100vh-100px)]">
      <Slider {...settings} className="h-full">
        <div>
          <Image
            src={AllImages?.HomePageBg1}
            alt="bg"
            className="h-[calc(100vh-23px)]"
          />
        </div>
        <div>
          <Image
            src={AllImages?.HomePageBg1}
            alt="bg"
            className="h-[calc(100vh-23px)]"
          />
        </div>
        <div>
          <Image
            src={AllImages?.HomePageBg1}
            alt="bg"
            className="h-[calc(100vh-23px)]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomePage;

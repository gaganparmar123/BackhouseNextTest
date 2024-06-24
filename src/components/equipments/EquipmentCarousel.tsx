"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import AllImages from "@/constant/images";

var settings = {
  infinite: false,
  dots: false,
  arrows: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const equipmentData = [
  {
    img: AllImages?.Equipment1,
    name: "60 Quart Hobart Mixer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    img: AllImages?.Equipment1,
    name: "60 Quart Hobart Mixer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    img: AllImages?.Equipment1,
    name: "60 Quart Hobart Mixer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    img: AllImages?.Equipment1,
    name: "60 Quart Hobart Mixer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    img: AllImages?.Equipment1,
    name: "60 Quart Hobart Mixer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
];

const EquipmentCarousel = () => {
  return (
    <div className="mt-8 lg:mt-10 px-8 custom-slider">
      <div>
        <h1 className="text-lg font-bold mb-4">Trending Items</h1>
      </div>
      <Slider {...settings} className="h-full">
        {equipmentData?.map((data) => (
          <div className="px-4">
            <div className="bg-[#F3F4F6] rounded-xl" key={data?.name}>
              <Image
                src={data?.img}
                alt="bg"
                className="h-[192px] object-cover rounded-t-lg"
              />
              <div className="flex flex-col gap-2 p-3">
                <h3 className="text-lg font-bold">{data?.name}</h3>
                <p className="text-xs">{data?.price}</p>
                <p className="text-sm">{data?.binding}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EquipmentCarousel;

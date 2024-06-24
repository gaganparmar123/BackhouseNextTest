"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import AllImages from "@/constant/images";
import Promotion from "../promotion/Promotion";

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
    id: 1,
    img: AllImages?.Equipment1,
    name: "60 Quart Hobart Mixer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 2,
    img: AllImages?.Equipment1,
    name: "60 Quart Hobart Mixer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 3,
    img: AllImages?.Equipment1,
    name: "60 Quart Hobart Mixer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 4,
    img: AllImages?.Equipment1,
    name: "60 Quart Hobart Mixer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 5,
    img: AllImages?.Equipment1,
    name: "60 Quart Hobart Mixer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
];

const EquipmentCarousel = () => {
  return (
    <div className="px-8 py-8 lg:py-10 custom-slider">
      <div>
        <h1 className="text-xl font-extrabold xl:text-2xl font-bold mb-4">
          Trending Items
        </h1>
      </div>
      <Slider {...settings} className="h-full">
        {equipmentData?.map((data) => (
          <div className="px-4" key={data.id}>
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

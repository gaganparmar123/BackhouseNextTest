"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import AllImages from "@/constant/images";
import Promotion from "../promotion/Promotion";

var settings = {
  infinite: true,
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
    img: AllImages?.ovens,
    name: "60 Quart Hobart ovens",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 2,
    img: AllImages?.refrigerator,
    name: "60 Quart Hobart refrigerator",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 3,
    img: AllImages?.mixer,
    name: "60 Quart Hobart Mixer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 4,
    img: AllImages?.slicer,
    name: "60 Quart Hobart slicer",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 5,
    img: AllImages?.prepStations,
    name: "60 Quart Hobart Prep Stations",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 6,
    img: AllImages?.Sinks,
    name: "60 Quart Hobart Sinks",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 7,
    img: AllImages?.IceCreammachines,
    name: "60 Quart Hobart IceCreammachines",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 8,
    img: AllImages?.fork,
    name: "60 Quart Hobart fork",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
  {
    id: 9,
    img: AllImages?.dishwashers,
    name: "60 Quart Hobart dishwashers",
    price: "$4200",
    binding: "Bidding ends in 8 days",
  },
];

const EquipmentCarousel = () => {
  return (
    <div className="py-8 lg:py-10 mx-auto max-w-screen-xl px-4 xl:px-0">
      <div className="custom-slider">
        <div className="text-center">
          <h1 className="font-extrabold tracking-tight leading-none text-xl md:text-4xl mb-4 lg:mb-6">
            Trending <span className="text-primary-10">Items</span>
          </h1>
          <p className="max-w-5xl mx-auto mb-6 text-sm text-gray-500 lg:mb-8 md:text-xs lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <Slider {...settings} className="h-full">
          {equipmentData?.map((data) => (
            <div className="px-4 pt-4" key={data.id}>
              <div className="bg-[#F3F4F6] border border-gray overflow-hidden rounded-xl  hover:translate-y-[-8px] transition" key={data?.name}>
                <Image
                  src={data?.img}
                  alt="bg"
                  className="h-[192px] 2xl:h-[232px] object-cover rounded-xl"
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
    </div>
  );
};

export default EquipmentCarousel;

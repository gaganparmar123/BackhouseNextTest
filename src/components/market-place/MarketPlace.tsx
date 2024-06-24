import AllImages from "@/constant/images";
import Image from "next/image";
import React from "react";

const MarketPlace = () => {
  return (
    <section className="bg-white">
      <div className="grid py-8 px-4 mx-auto max-w-screen-lg lg:py-10 md:px-6 lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl">
            Tired of failing to sell your items on Facebook Marketplace or
            through an auctioneer?
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Backhouse is the first nationwide restaurant equipment marketplace
            giving you access to verified buyers
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-600 rounded-lg bg-primary-10 hover:bg-[#f5bb09] focus:ring-4 focus:ring-primary-300"
          >
            Learn more
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={AllImages.marketplace} alt="bg" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;

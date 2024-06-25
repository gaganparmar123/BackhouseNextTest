import AllImages from "@/constant/images";
import Image from "next/image";
import React from "react";

const Promotion = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-x-10 lg:py-10 md:grid-cols-4 gap-6 lg:grid-cols-5">
        <div className="lg:flex md:col-span-2 lg:col-span-2">
          <Image
            src={AllImages.openingRestaurant}
            alt="bg"
            className="rounded-lg w-full"
          />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <h1 className="max-w-xl mb-4 font-extrabold tracking-tight leading-none text-xl md:text-4xl lg:text-6xl/[80px]">
            Opening a <span className="text-primary-10">Restaurant?</span>
          </h1>
          <p className="max-w-2xl mb-6 font-semibold text-gray-500 lg:mb-8 md:text-xs lg:text-base">
            Save up to 50% on equipment costs by working with Backhouse
          </p>
          <p className="max-w-2xl mb-6 text-sm text-gray-500 lg:mb-8 md:text-xs lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-800 rounded-lg bg-primary-10"
          >
            Explore now
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
      </div>
    </section>
  );
};

export default Promotion;

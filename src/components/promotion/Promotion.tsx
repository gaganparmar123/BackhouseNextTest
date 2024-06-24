import AllImages from "@/constant/images";
import Image from "next/image";
import React from "react";

const Promotion = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-x-10 lg:py-10 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={AllImages.openingRestaurant}
            alt="bg"
            className="rounded-lg"
          />
        </div>
        <div className="ml-auto place-self-center lg:col-span-7">
          <h1 className="max-w-xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl">
            Opening a restaurant?
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xs lg:text-base">
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
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-600 rounded-lg bg-primary-10 hover:bg-[#f5bb09] focus:ring-4 focus:ring-primary-300"
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

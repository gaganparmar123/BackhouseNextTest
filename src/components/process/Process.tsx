import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineVerified } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";

const processData = [
  {
    title: "Browse",
    description: "Meet a Backhouse representative",
    icon: <TiShoppingCart className="text-2xl lg:text-5xl" />,
  },
  {
    title: "Elevate",
    description:
      "Our AI-enabled experts will find you the best deals through access to our private listing network",
    icon: <MdOutlineVerified className="text-2xl lg:text-5xl" />,
  },
  {
    title: "Reliable",
    description: "Buy or bid on verified items",
    icon: <FaLock className="text-2xl lg:text-5xl" />,
  },
  {
    title: "Post Purchase",
    description:
      "Backhouse facilitates all logistics involved with your purchases",
    icon: <BsCartCheckFill className="text-2xl lg:text-5xl text-red" />,
  },
];

const Process = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 md:px-6">
      <div>
        <h3 className="text-sm font-bold text-primary-10 uppercase mb-2">
          How we work
        </h3>
        <h2 className="text-xl md:text-3xl font-bold">
          Built by restaurateurs for restaurateurs
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 md:pt-10">
        {processData?.map((data) => (
          <div className="p-2 md:p-6 w-full md:my-4 mt-8" key={data?.title}>
            <div className="gap-4">
              <div className="text-primary-10">{data?.icon}</div>
              <h2 className="text-sm lg:text-lg mt-4">{data?.title}</h2>
            </div>
            <div>
              <p className="text-sm mt-4">{data?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center lg:justify-start items-center mt-4 pl-6">
        <button
          type="button"
          className="bg-primary-10 focus:outline-none rounded-lg text-xs md:text-sm font-semibold px-5 py-2.5 text-center uppercase"
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Process;

import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineVerified } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";

const processData = [
  {
    title: "Browse",
    description: "Meet a Backhouse rep",
    icon: <TiShoppingCart className="text-2xl lg:text-3xl" />,
  },
  {
    title: "Elevate",
    description:
      "Our experts find you the best deals through access to our private listing network",
    icon: <MdOutlineVerified className="text-2xl lg:text-3xl" />,
  },
  {
    title: "Reliable",
    description: "Buy or bid on verified items",
    icon: <FaLock className="text-2xl lg:text-3xl" />,
  },
  {
    title: "Post Purchase",
    description:
      "Backhouse facilitates all logistics involved with your purchases",
    icon: <BsCartCheckFill className="text-2xl lg:text-3xl text-red" />,
  },
];

const Process = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-10 md:px-6">
      <div>
        <h1 className="text-2xl md:text-5xl font-extrabold uppercase text-center mb-8">
          How it <span className="text-primary-10">works</span>
        </h1>
      </div>
      <div>
        {processData?.map((data) => (
          <div
            className="p-6 bg-[#F6F5F4] w-full rounded-2xl border border-gray-300 my-4 hover:shadow-lg"
            key={data?.title}
          >
            <div className="flex items-center gap-4">
              <div className="text-primary-10">{data?.icon}</div>
              <h2 className="text-xl lg:text-3xl font-bold">{data?.title}</h2>
            </div>
            <div>
              <p className="lg:text-lg mt-4">{data?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;

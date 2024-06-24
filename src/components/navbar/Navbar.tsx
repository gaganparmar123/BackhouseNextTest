import React from "react";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import AllImages from "@/constant/images";

const navbarItems = [
  "contact us",
  "Browse Public Listings",
  "sell with us",
  "claim your account",
];

const Navbar = () => {
  return (
    <div className="absolute top-0 right-0 text-base text-white w-full">
      <div className="flex justify-between items-center px-4 pt-2">
        <div>
          <Image src={AllImages?.Logo} alt="logo" height={50} width={250} />
        </div>
        <div>
          <button
            id="nav-toggle-button"
            data-hs-collapse="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <MdMenu className="text-5xl text-white" />
          </button>
        </div>
        <div className="flex gap-4 capitalize p-6 hidden lg:flex">
          {navbarItems?.map((item) => (
            <div
              key={item}
              className="text-white hover:border-b-2 border-b-primary-10 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

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
    <div className="sticky bg-white top-0 right-0 text-base w-full p-3 md:p-4 border-b z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center lg:px-5">
        <div>
          <Image src={AllImages?.Logo} alt="logo" height={50} width={250} className="h-[50px] w-auto" />
        </div>
        <div>
          <button
            id="nav-toggle-button"
            data-hs-collapse="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden bg-primary-10 mt-1"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <MdMenu className="text-5xl text-white" />
          </button>
        </div>
        <div className="flex gap-4 capitalize hidden lg:flex">
          {navbarItems?.map((item) => (
            <div
              key={item}
              className="text-dark font-medium border-b-2 border-b-transparent hover:border-b-2 hover:border-b-primary-10 cursor-pointer"
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

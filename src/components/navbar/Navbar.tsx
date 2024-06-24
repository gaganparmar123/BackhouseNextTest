import AllImages from "@/constant/images";
import Image from "next/image";
import React from "react";

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
        <div className="flex gap-4 capitalize p-6">
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

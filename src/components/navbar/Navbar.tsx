import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import AllImages from "@/constant/images";

const navbarItems = ["contact us", "Browse Public Listings", "sell with us"];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => setShowMenu(false));

    return () => {
      // return a cleanup function to unregister our function since it will run multiple times
      window.removeEventListener("scroll", (e) => setShowMenu(false));
    };
  }, []);
  return (
    <div className="sticky bg-white top-0 right-0 text-base w-full p-3 md:p-4 border-b z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center lg:px-5">
        <div>
          <Image
            src={AllImages?.Logo}
            alt="logo"
            height={50}
            width={250}
            className="h-[50px] w-auto"
          />
        </div>
        <div>
          <button
            id="nav-toggle-button"
            data-hs-collapse="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden bg-primary-10 mt-1"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setShowMenu(!showMenu)}
          >
            <MdMenu className="text-5xl text-white" />
          </button>
        </div>
        {showMenu && (
          <div
            className="capitalize lg:hidden absolute top-[78px] left-0 bg-white w-full shadow-lg"
            onClick={() => setShowMenu(!showMenu)}
          >
            {navbarItems?.map((item) => (
              <div
                key={item}
                className="text-dark font-medium border-b-2 border-b-gray-100 cursor-pointer p-4 last:border-b-0"
              >
                {item}
              </div>
            ))}
          </div>
        )}
        <div className="flex capitalize hidden lg:flex">
          {navbarItems?.map((item, index) => (
            <>
              <div
                key={item}
                className="text-dark font-medium border-b-2 border-b-transparent hover:border-b-2 hover:border-b-primary-10 cursor-pointer"
              >
                {item}
              </div>
              {navbarItems?.length !== index + 1 && (
                <span className="mx-2 text-primary-10 font-bold">|</span>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

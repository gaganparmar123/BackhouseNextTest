import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white mt-4 px-4 mx-auto md:px-4 border-t">
      <div className="w-full max-w-screen-lg mx-auto p-4">
        <span className="block text-sm md:text-lg lg:text-xl text-gray-500 text-center">
          © 2024{" "}
          <a href="" className="hover:underline font-semibold">
            Created by restaurateurs for restaurateurs
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

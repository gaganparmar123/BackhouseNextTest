"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Chat from "../chat/chat";

const AiButton = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [fixedPopover, setFixedPopover] = useState(false);
  return (
    <div className="fixed bottom-4 right-8 flex justify-center">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onMouseEnter={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}
        onClick={() => setFixedPopover(!fixedPopover)}
      >
        Ask AI
      </button>

      {(showPopover || fixedPopover) && (
        <div
          role="tooltip"
          className="absolute bottom-12 right-4 inline-block w-80 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
        >
          <div className="flex justify-between items-center px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Tell us what you’re looking for ?
            </h3>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setFixedPopover(false)}
            />
          </div>
          <div className="px-3 py-2">
            <p>
              Our AI-enabled team sources, verifies and negotiates you the best
              deal on quality items.
            </p>
          </div>
          <Chat />
        </div>
      )}
    </div>
  );
};

export default AiButton;
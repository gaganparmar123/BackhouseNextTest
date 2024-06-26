"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Chat from "../chat/chat";

const AiButton = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [fixedPopover, setFixedPopover] = useState(false);
  return (
    <div className="fixed bottom-14 md:bottom-16 lg:bottom-6 right-0 md:right-0 flex justify-center">
      <button
        type="button"
        className="bg-primary-10 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 me-3 text-center"
        onMouseEnter={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}
        onClick={() => setFixedPopover(!fixedPopover)}
      >
        Ask AI
      </button>

      {(showPopover || fixedPopover) && (
        <div
          role="tooltip"
          className="absolute bottom-12 right-4 inline-block w-80 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <div className="flex justify-between items-center px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900">
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

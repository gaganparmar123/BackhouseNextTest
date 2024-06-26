"use client";
import AllImages from "@/constant/images";
import Image from "next/image";
import React, { useRef, useEffect, ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  overflow?: boolean;
  children: ReactNode;
}

const Modal = ({ onClose, overflow, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-70"
        onClick={onClose}
      ></div>
      <div
        ref={modalRef}
        className="relative flex flex-col w-full max-w-[80%] max-h-[calc(100vh-70px)] md:max-w-[640px] z-10 bg-[#F5F5F5] rounded-xl md:rounded-3xl border border-gray-bordercolor"
      >
        <Image
          src={AllImages?.CloseIcon}
          alt="close"
          className="absolute top-4 right-4 cursor-pointer w-[16px] h-[16px]"
          onClick={onClose}
        />
        <div
          className={`h-[100%] w-full overflow-y-auto p-4 md:p-8 ${
            overflow ? "mb-[80px]" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

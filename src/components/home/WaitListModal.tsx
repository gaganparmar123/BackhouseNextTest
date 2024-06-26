import React from "react";
import Modal from "../modal/Modal";

interface WaitListModalProps {
  setShowPopover: (value: boolean) => void;
}

const WaitListModal = ({ setShowPopover }: WaitListModalProps) => {
  return (
    <Modal onClose={() => setShowPopover(false)}>
      <div>
        <h2 className="text-xl lg:text-3xl font-bold uppercase text-center mb-8">
          contact info
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="text-xs mb-2">First Name*</div>
          <input
            type="text"
            className="flex-1 px-4 py-2 mr-2 border rounded-lg focus:outline-none w-full"
          />
        </div>
        <div className="col-span-1">
          <div className="text-xs mb-2">Last Name*</div>
          <input
            type="text"
            className="flex-1 px-4 py-2 mr-2 border rounded-lg focus:outline-none w-full"
          />
        </div>
        <div className="col-span-2">
          <div className="text-xs mb-2">Conatct No*</div>
          <input
            type="text"
            className="flex-1 px-4 py-2 mr-2 border rounded-lg focus:outline-none w-full"
          />
        </div>
        <div className="col-span-2">
          <div className="text-xs mb-2">Address*</div>
          <textarea
            rows={4}
            className="flex-1 px-4 py-2 mr-2 border rounded-lg focus:outline-none w-full"
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <button
            type="button"
            className="bg-primary-10 focus:outline-none rounded-lg text-sm px-5 py-2.5 font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default WaitListModal;

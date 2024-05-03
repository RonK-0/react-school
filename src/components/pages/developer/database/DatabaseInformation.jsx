import React from "react";
import { LiaEnvelope, LiaKeySolid } from "react-icons/lia";

const DatabaseInformation = ({ showInfo }) => {
  return (
    <div
      className={`information transition-all duration-200 absolute w-1/4 border-l border-line h-[calc(100vh-75px)] overflow-hidden ${
        showInfo ? "right-0" : "-right-1/4"
      }`}
    >
      <div className="p-10">
        <div className="text-center mb-8">
          <img
            src="https://via.placeholder.com/100"
            alt=""
            className="size-[100px] mx-a object-coover rounded-full mb-4"
          />
          <h3 className="mb-1">Robert Fox</h3>
          <small className="opacity-60">Science 7 Student</small>
          <ul className="flex center mt-5 gap-5">
            <li>
              <button className="text-2xl tooltip" data-tooltip="Account">
                <LiaKeySolid />
              </button>
            </li>
            <li>
              <button className="text-2xl tooltip" data-tooltip="Email">
                <LiaEnvelope />
              </button>
            </li>
          </ul>
        </div>

        <h4 className="mb-3">About</h4>
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, ipsa?
          Ipsam voluptatum vero explicabo itaque.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="info-box">
            <h5>Age</h5>
            <p className="text-xs">7</p>
          </div>
          <div className="info-box">
            <h5>Gender</h5>
            <p className="text-xs">Male</p>
          </div>
          <div className="info-box">
            <h5>Birthday</h5>
            <p className="text-xs">January 1, 2000</p>
          </div>
          <div className="info-box">
            <h5>Address</h5>
            <p className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseInformation;

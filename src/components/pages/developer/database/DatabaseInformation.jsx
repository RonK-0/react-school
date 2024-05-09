import React from "react";
import { FaTimes } from "react-icons/fa";
import { LiaEnvelope, LiaKeySolid } from "react-icons/lia";

const DatabaseInformation = ({ showInfo, setShowInfo, studentInfo }) => {
  const handleClose = () => setShowInfo(false);
  return (
    <div
      className={`information transition-all duration-200 fixed top-[72px] w-[415px] border-l border-line h-[calc(100vh-75px)] overflow-hidden ${
        showInfo ? "right-0" : "-right-full"
      }`}
    >
      <button
        type="button"
        className="absolute top-0 left-0 size-8 grid place-content-center bg-alert text-content rounded-md"
        onClick={handleClose}
      >
        <FaTimes />
      </button>
      <div className="p-10">
        <div className="text-center mb-8">
          <img
            src="https://via.placeholder.com/100"
            alt=""
            className="size-[100px] mx-a object-coover rounded-full mb-4"
          />
          <h3 className="mb-1">
            {studentInfo != null ? studentInfo.student_name : ""}
          </h3>
          <small className="opacity-60">
            {studentInfo != null ? studentInfo.student_class : ""} Student
          </small>
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
          {studentInfo != null ? studentInfo.student_about : ""}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="info-box">
            <h5>Age</h5>
            <p className="text-xs">
              {studentInfo != null ? studentInfo.student_age : ""}
            </p>
          </div>
          <div className="info-box">
            <h5>Gender</h5>
            <p className="text-xs">
              {studentInfo != null ? studentInfo.student_gender : ""}
            </p>
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
          <div className="info-box">
            <h5>Email</h5>
            <p className="text-xs">
              {studentInfo != null ? studentInfo.student_email : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseInformation;

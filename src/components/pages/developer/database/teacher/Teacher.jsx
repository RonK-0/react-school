import { FiPlus } from "react-icons/fi";
import React from "react";
import Navigation from "../../../../partials/Navigation";
import Header from "../../../../partials/Header";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import ModalAddTeacher from "./ModalAddTeahcer";
import TeacherTable from "./TeacherTable";
import DatabaseInformation from "../DatabaseInformation";
import useQueryData from "../../../../custom-hook/useQueryData";
import ModalError from "../../../../partials/modals/ModalError";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import ModalConfirm from "../../../../partials/modals/ModalConfirm";
import SpinnerWindow from "../../../../partials/spinners/SpinnerWindow";

const Teacher = () => {
  const [showInfo, setShowInfo] = React.useState(false);
  const handleShowInfo = () => setShowInfo(!showInfo);

  const [showAddTeacher, setAddTeacher] = React.useState(false);
  const handleShowAddTeacher = () => setAddTeacher(!showAddTeacher);

  const {
    isLoading,
    isFetching,
    error,
    data: teacher,
  } = useQueryData(
    "/v1/teacher", // endpoint
    "get", // method
    "teacher" // key
  );
  return (
    <section className="flex overflow-x-hidden">
      <Navigation />
      <main className="w-[calc(100%-250px)]">
        <Header />
        <div className="flex relative">
          <div
            className={`main-wrapper transition-all px-4 py-3 ${
              showInfo ? "w-3/4" : "w-full"
            }`}
          >
            <div className="flex justify-between items-center">
              <h1 className="leading-none mb-0">Database</h1>
              <form action="" className="relative">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Teacher"
                  className="p-1 px-3 pl-10 bg-secondary border border-stone-800 rounded-md placeholder:text-white placeholder:opacity-20 text-content"
                />
                <CiSearch className="absolute ty-a left-2 z-[1] text-white text-2xl opacity-20" />
              </form>
            </div>

            <div className="tab flex between-center mt-8 border-b border-line mb-8">
              <ul className="flex items-center gap-10">
                <li className="tab-link">
                  <Link to="/database/student">Student</Link>
                </li>
                <li className="tab-link active">
                  <Link to="/database/teacher">Teacher</Link>
                </li>
                <li className="tab-link">
                  <Link to="/database/staff">Staff</Link>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn--accent"
                onClick={handleShowAddTeacher}
              >
                <FiPlus /> New
              </button>
            </div>

            <TeacherTable
              setShowInfo={setShowInfo}
              showInfo={showInfo}
              isLoading={isLoading}
              teacher={teacher}
            />
          </div>

          <DatabaseInformation showInfo={showInfo} />
        </div>
      </main>
      {showAddTeacher && (
        <ModalAddTeacher
          setAddTeacher={setAddTeacher}
          showAddTeacher={showAddTeacher}
        />
      )}
      {/* <ModalError position="center"/> */}
      {/* <ModalValidate position="center"/> */}
      {/* <ModalConfirm position="center"/> */}
      {/* <ModalConfirm position="center"/> */}
      {/* <SpinnerWindow/> */}
    </section>
  );
};

export default Teacher;

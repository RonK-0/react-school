import React from "react";
import Navigation from "../../../../partials/Navigation";
import Header from "../../../../partials/Header";
import { Link } from "react-router-dom";
import ModalAddStudent from "./ModalAddStudent";
import StudentTable from "./StudentTable";
import DatabaseInformation from "../DatabaseInformation";
import useQueryData from "../../../../custom-hook/useQueryData";
import SpinnerWindow from "../../../../partials/spinners/SpinnerWindow";
import Toast from "../../../../partials/Toast";
import { FiPlus } from "react-icons/fi";
import Searchbar from "./Searchbar";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../store/StoreAction";

const Student = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  // const [showInfo, setShowInfo] = React.useState(false);
  // const handleShowInfo = () => setShowInfo(!showInfo);

  // const [isAdd, setIsAdd] = React.useState(false);
  const handleAdd = () => {
    dispatch(setIsAdd(true)), setItemEdit(null);
  };

  // const [isSuccess, setIsSuccess] = React.useState(false);
  // const [message, setMessage] = React.useState("");
  const [itemEdit, setItemEdit] = React.useState(null);

  // const [isError, setIsError] = React.useState(false);

  // const [studentInfo, setStudentInfo] = React.useState(null);

  const [isSearch, setIsSeach] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");

  // const {
  //   isLoading,
  //   isFetching,
  //   error,
  //   data: student,
  // } = useQueryData(
  //   // "/v1/student", // endpoint
  //   // "get", // method
  //   // "student" // key

  //   isSearch ? "/v1/student/search" : "/v1/student", // endpoint
  //   isSearch ? "post" : "get", // method
  //   ["student", isSearch], // key
  //   {
  //       searchValue: keyword
  //   }
  // );

  const {
    isLoading,
    isFetching,
    error,
    data: student,
  } = useQueryData(
    isSearch ? "/v1/student/search" : "/v1/student", // endpoint
    isSearch ? "post" : "get", // method
    // ["student", isSearch], // key
    // {
    //   searchValue: keyword,
    // }
    "student",
    { searchValue: keyword }
  );

  return (
    <section className="flex relative left-[250px]">
      <Navigation />
      <main className="w-[calc(100%-250px)]">
        <Header />
        <div className="flex relative">
          <div
            className={`main-wrapper transition-all px-4 py-3 ${
              store.isShow ? "w-3/4" : "w-full"
            }`}
          >
            <div
              className={`fixed bg-primary ${
                store.isShow ? "w-[calc(100%-700px)]" : "w-[calc(100%-300px)]"
              }`}
            >
              <div className="flex justify-between items-center">
                <h1 className="leading-none mb-0">Student Database</h1>
                <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword} />
              </div>

              <div className="tab flex between-center mt-8 border-b border-line mb-8">
                <ul className="flex items-center gap-10">
                  <li className="tab-link active">
                    <Link to="/database/student">Student</Link>
                  </li>
                  <li className="tab-link">
                    <Link to="/database/teacher">Teacher</Link>
                  </li>
                  <li className="tab-link">
                    <Link to="/database/staff">Staff</Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn--accent"
                  onClick={handleAdd}
                >
                  <FiPlus /> New
                </button>
              </div>
            </div>

            <StudentTable
              isLoading={isLoading}
              student={student}
              setItemEdit={setItemEdit}
            />
          </div>

          <DatabaseInformation />
        </div>
      </main>
      {store.isAdd && <ModalAddStudent itemEdit={itemEdit} />}
      {store.success && <Toast />}
      {store.error && <Toast />}
      {/* <ModalError position="center"/> */}
      {/* <ModalValidate position="center"/> */}
      {/* <SpinnerWindow/> */}
    </section>
  );
};

export default Student;

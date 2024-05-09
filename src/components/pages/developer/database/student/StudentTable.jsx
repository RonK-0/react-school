import React from "react";
import { PiArchive } from "react-icons/pi";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import TableLoader from "../../../../partials/TableLoader";
import NoData from "../../../../partials/NoData";
import SpinnerFetching from "../../../../partials/spinners/SpinnerFetching";
import ModalConfirm from "../../../../partials/modals/ModalConfirm";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  setInfo,
  setIsActive,
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsShow,
} from "../../../../../store/StoreAction";

const StudentTable = ({ isLoading, student, setItemEdit }) => {
  const { dispatch, store } = React.useContext(StoreContext);

  let counter = 1;
  // const [isActive, setIsActive] = React.useState(false);
  const [id, setId] = React.useState("");
  // const [isArchiving, setIsArchiving] = React.useState(0);
  // const [isDelete, setIsDelete] = React.useState(false);

  const handleShowInfo = (item) => {
    dispatch(setIsShow(true));
    dispatch(setInfo(item));
  };

  const handleEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
  };

  const handleArchive = (item) => {
    dispatch(setIsActive(0));
    setId(item.student_aid);
    dispatch(setIsArchive(true));
  };

  const handleRestore = (item) => {
    dispatch(setIsActive(0));
    setId(item.student_aid);
    dispatch(setIsArchive(false));
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.student_aid);
  };

  return (
    <>
      <div
        className={`table-wrapper overflow-x-scroll lg:overflow-x-auto h-full pb-64 fixed top-56 left-[270px] ${
          store.isShow ? "w-[calc(100%-690px)]" : "w-[calc(100%-270px)]"
        }`}
      >
        {/* <SpinnerFetching /> */}
        <table>
          <thead>
            <tr>
              <th className="w-5">#</th>
              <th className="w-[150px]">Name</th>
              <th className="w-20">Class</th>
              <th className="w-20">Age</th>
              <th className="w-20">Gender</th>
              <th className="w-20">Email</th>
              <th className="w-[100px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={7}>
                  <TableLoader count="20" cols="4" />
                </td>
              </tr>
            ) : student.data.length === 0 ? (
              <tr>
                <td colSpan={7}>
                  <NoData />
                </td>
              </tr>
            ) : (
              student?.data.map((item, key) => (
                <tr onDoubleClick={() => handleShowInfo(item)} key={key}>
                  <td>{counter++}</td>
                  <td>{item.student_name}</td>
                  <td>{item.student_class}</td>
                  <td>{item.student_age}</td>
                  <td>{item.student_gender}</td>
                  <td>{item.student_email}</td>
                  <td className="table-action">
                    <ul>
                      {item.student_is_active ? (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleEdit(item)}
                            >
                              <LiaEdit />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Archive"
                              onClick={() => handleArchive(item)}
                            >
                              <PiArchive />
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Restore"
                              onClick={() => handleRestore(item)}
                            >
                              <LiaHistorySolid />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={() => handleDelete(item)}
                            >
                              <LiaTrashAltSolid />
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {store.isActive && (
        <ModalConfirm
          position={"center"}
          queryKey={"student"}
          endpoint={`/v1/student/active/${id}`}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          position={"center"}
          queryKey={"student"}
          endpoint={`/v1/student/${id}`}
        />
      )}
    </>
  );
};

export default StudentTable;

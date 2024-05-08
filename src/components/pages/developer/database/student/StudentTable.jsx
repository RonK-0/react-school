import React from "react";
import { PiArchive } from "react-icons/pi";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import TableLoader from "../../../../partials/TableLoader";
import NoData from "../../../../partials/NoData";
import SpinnerFetching from "../../../../partials/spinners/SpinnerFetching";
import ModalConfirm from "../../../../partials/modals/ModalConfirm";
import ModalDelete from "../../../../partials/modals/ModalDelete";

const StudentTable = ({
  setShowInfo,
  showInfo,
  isLoading,
  student,
  setItemEdit,
  setIsAdd,
  setIsSuccess,
  setMessage,
  setIsError
}) => {
  const handleShowInfo = () => setShowInfo(!showInfo);
  let counter = 1;

  const handleEdit = (item) => {
    setItemEdit(item);
    setIsAdd(true);
  };

  const [isActive, setIsActive] = React.useState(false);
  const [id, setId] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(0);
  const [isDelete, setIsDelete] = React.useState(false);

  const handleArchive = (item) => {
    setIsActive(true);
    setId(item.student_aid);
    setIsArchiving(0);
  };

  const handleRestore = (item) => {
    setIsActive(true);
    setId(item.student_aid);
    setIsArchiving(1);
  };

  const handleDelete = (item) => {
    setIsDelete(true);
    setId(item.student_aid);
  };

  return (
    <>
      <div className="table-wrapper overflow-x-scroll lg:overflow-x-auto h-full relative">
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
                <tr onDoubleClick={handleShowInfo} key={key}>
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
      {isActive && (
        <ModalConfirm
          position={"center"}
          setIsActive={setIsActive}
          isArchiving={isArchiving}
          queryKey={"student"}
          endpoint={`/v1/student/active/${id}`}
          
          setIsSuccess={setIsSuccess}
          setMessage={setMessage}
          setIsError={setIsError}
        />
      )}
      {isDelete && (
        <ModalDelete
          position={"center"}
          setIsDelete={setIsDelete}
          handleDelete={handleDelete}
          queryKey={"student"}
          endpoint={`/v1/student/${id}`}

          setIsSuccess={setIsSuccess}
          setMessage={setMessage}
          setIsError={setIsError}
        />
      )}
    </>
  );
};

export default StudentTable;

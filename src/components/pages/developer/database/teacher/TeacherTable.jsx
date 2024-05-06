import React from "react";
import { PiArchive } from "react-icons/pi";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import TableLoader from "../../../../partials/TableLoader";
import NoData from "../../../../partials/NoData";
import SpinnerFetching from "../../../../partials/spinners/SpinnerFetching";

const TeacherTable = ({ setShowInfo, showInfo, isLoading, teacher }) => {
  const handleShowInfo = () => setShowInfo(!showInfo);
  let counter = 1;

  return (
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
          ) : teacher.data.length === 0 ? (
            <tr>
              <td colSpan={7}>
                <NoData />
              </td>
            </tr>
          ) : (
            teacher?.data.map((item, key) => (
              <tr onDoubleClick={handleShowInfo} key={key}>
                <td>{counter++}</td>
                <td>{item.teacher_name}</td>
                <td>{item.teacher_class}</td>
                <td>{item.teacher_age}</td>
                <td>{item.teacher_gender}</td>
                <td>{item.teacher_email}</td>
                <td className="table-action">
                  <ul>
                    {item.teacher_is_active ? (
                      <>
                        <li>
                          <button className="tooltip" data-tooltip="Edit">
                            <LiaEdit />
                          </button>
                        </li>
                        <li>
                          <button className="tooltip" data-tooltip="Archive">
                            <PiArchive />
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <button className="tooltip" data-tooltip="Restore">
                            <LiaHistorySolid />
                          </button>
                        </li>
                        <li>
                          <button className="tooltip" data-tooltip="Delete">
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
  );
};

export default TeacherTable;

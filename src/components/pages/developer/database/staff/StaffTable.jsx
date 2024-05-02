import React from "react";
import { PiArchive } from "react-icons/pi";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import TableLoader from "../../../../partials/TableLoader";
import NoData from "../../../../partials/NoData";
import SpinnerFetching from "../../../../partials/spinners/SpinnerFetching";

const StaffTable = ({ setShowInfo, showInfo }) => {
  const handleShowInfo = () => setShowInfo(!showInfo);

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
          <tr>
            <td colSpan={7}>
              <TableLoader count="20" cols="4" />
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <NoData />
            </td>
          </tr>
          <tr onDoubleClick={handleShowInfo}>
            <td>1</td>
            <td>Robert Fox</td>
            <td>Science 4</td>
            <td>7</td>
            <td>Male</td>
            <td>robert.fox@gmail.com</td>
            <td className="table-action">
              <ul>
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
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;

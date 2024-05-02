import { FiPlus } from "react-icons/fi"; 
import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { CiSearch } from 'react-icons/ci'
import { PiArchive } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { LiaEdit, LiaEnvelope, LiaHistorySolid, LiaKeySolid, LiaTrashAltSolid } from "react-icons/lia";
import ModalAddStudent from './ModalAddStudent'

const Student = () => {
  const [showInfo, setShowInfo] = React.useState(false)
  const handleShowInfo = ()=> setShowInfo(!showInfo)
  return (
    <section className='flex'>
      <Navigation/>
      <main className='w-[calc(100%-250px)]'>
        <Header/>
        <div className="flex relative">
          <div className={`main-wrapper transition-all px-4 py-3 ${showInfo ? "w-3/4" : "w-full"}`}>
            <div className="flex justify-between items-center">
              <h1>Database</h1>
              <form action="" className='relative'>
                <input type="text" name="" id="" placeholder='Search student' className='p-1 px-3 pl-10 bg-secondary border border-stone-800 rounded-md placeholder:text-white placeholder:opacity-20 text-content' />
                <CiSearch className='absolute ty-a left-2 z-[1] text-white text-2xl opacity-20'/>
              </form>
            </div>

            <div className="tab flex between-center mt-8 border-b border-line mb-8">
              <ul className="flex items-center gap-10">
                <li className="tab-link active"><Link to="/student">Student</Link></li>
                <li className="tab-link"><Link to="/teacher">Teacher</Link></li>
                <li className="tab-link"><Link to="/staff">Staff</Link></li>
              </ul>
              <button type="button" className="btn btn--accent"><FiPlus /> New</button>
            </div>

            <div className="table-wrapper overflow-x-scroll lg:overflow-x-auto">
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
                  <tr onDoubleClick={handleShowInfo}>
                    <td>1</td>
                    <td>Robert Fox</td>
                    <td>Science 4</td>
                    <td>7</td>
                    <td>Male</td>
                    <td>robert.fox@gmail.com</td>
                    <td className="table-action">
                      <ul>
                        <li><button className="tooltip" data-tooltip="Edit"><LiaEdit/></button></li>
                        <li><button className="tooltip" data-tooltip="Archive"><PiArchive/></button></li>
                        <li><button className="tooltip" data-tooltip="Restore"><LiaHistorySolid/></button></li>
                        <li><button className="tooltip" data-tooltip="Delete"><LiaTrashAltSolid/></button></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={`information transition-all duration-200 absolute w-1/4 border-l border-line h-[calc(100vh-75px)] overflow-hidden ${showInfo ? "right-0" : "-right-1/4"}`}>
            <div className="p-10">
              <div className="text-center mb-8">
                <img src="https://via.placeholder.com/100" alt="" className="size-[100px] mx-a object-coover rounded-full mb-4" />
                <h3 className="mb-1">Robert Fox</h3>
                <small className="opacity-60">Science 7 Student</small>
                <ul className="flex center mt-5 gap-5">
                  <li><button className="text-2xl tooltip" data-tooltip="Account"><LiaKeySolid/></button></li>
                  <li><button className="text-2xl tooltip" data-tooltip="Email"><LiaEnvelope/></button></li>
                </ul>
              </div>

              <h4 className="mb-3">About</h4>
              <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, ipsa? Ipsam voluptatum vero explicabo itaque.</p>

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
                  <p className="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ModalAddStudent/>
    </section>
  )
}

export default Student

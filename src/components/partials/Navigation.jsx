import { RxDashboard } from "react-icons/rx"; 
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTiktok } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineCalendar, HiOutlineDocument  } from "react-icons/hi";
import Logo from "./svg/Logo";

const Navigation = () => {
  return (
    <aside className='px-4 py-6 w-[250px] h-screen border-r-2 border-line'>
        <div className="flex items-center gap-4">
          <Logo/>
          <h2 className="mb-0 mt-0.5">School</h2>
        </div>

        <ul className='nav'>
            <li className='nav-link active'><Link to={'#'}><RxDashboard /> Dashboard</Link></li>
            <li className='nav-link'><Link to={'#'}><AiOutlineMessage /> Messenger</Link></li>
            <li className='nav-link'><Link to={'#'}><HiOutlineCalendar /> Calendar</Link></li>
            <li className='nav-link'><Link to={'#'}><HiOutlineDocument /> Database</Link></li>
            <li className='nav-link'><Link to={'#'}><FaTiktok /> Attendance</Link></li>
            <li className='nav-link'><Link to={'#'}><FaTiktok /> Settings</Link></li>
        </ul>
    </aside>
  )
}

export default Navigation
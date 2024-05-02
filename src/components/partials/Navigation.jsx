import { RxDashboard } from "react-icons/rx"; 
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTiktok } from "react-icons/fa";

const Navigation = () => {
  return (
    <aside className='px-4 py-6 w-[250px] h-screen border-r-2 border-line'>
        <h2>School</h2>

        <ul className='nav'>
            <li className='nav-link active'><Link to={'#'}><RxDashboard /> Dashboard</Link></li>
            <li className='nav-link'><Link to={'#'}><FaTiktok /> Messenger</Link></li>
            <li className='nav-link'><Link to={'#'}><FaTiktok /> Calendar</Link></li>
            <li className='nav-link'><Link to={'#'}><FaTiktok /> Database</Link></li>
            <li className='nav-link'><Link to={'#'}><FaTiktok /> Attendance</Link></li>
            <li className='nav-link'><Link to={'#'}><FaTiktok /> Settings</Link></li>
        </ul>
    </aside>
  )
}

export default Navigation
import React from 'react'
import { TfiDashboard } from "react-icons/tfi";
import { LuUser2 } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { LiaBookReaderSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className=' flex  flex-col gap-9 bg-blue-700  w-64  border-1 h-screen '>
            <div className='pt-4 '>
                <Link to={"/"} className='flex flex-row items-center justify-center text-white  font-semibold gap-2  border-1 rounded'>
                    <TfiDashboard className='text-4xl' />
                    <h4 className='text-2xl'> CP ERP</h4>
                </Link>
            </div>
            <div className='px-2'>
                <ul className=' flex  flex-col gap-3 text-white  font-normal pb-10  text-center'>
                    <li>
                        <Link to={"/"} className='flex gap-2 items-center  hover:bg-blue-800  p-2 rounded'>
                            <TfiDashboard className='text-2xl' />
                            <h6>Dashboard</h6>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/hr"} className=' flex gap-2  items-center hover:bg-blue-800  p-2 rounded'>
                            <LuUser2 className='text-xl' />
                            <h6>HR</h6>
                        </Link>
                    </li>
                    <li >
                        <Link to={"/crm"} className=' flex gap-2  items-center hover:bg-blue-800  p-2 rounded'>
                            <FaRegCalendarAlt className='text-xl' />
                            <h6>CRM</h6>
                        </Link>
                    </li>
                    <li >
                        <Link to={"/active"} className=' flex gap-2  items-center hover:bg-blue-800  p-2 rounded'>
                            <IoNewspaperOutline className='text-xl' />
                            <h6>According</h6>
                        </Link>
                    </li>
                    <li >
                        <Link to={"/active"} className=' flex gap-2  items-center hover:bg-blue-800  p-2 rounded'>
                            <BsBuildings className='text-xl' />
                            <h6>Company</h6>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/todo-list"} className=' flex gap-2  items-center hover:bg-blue-800  p-2 rounded'>
                        <LuListTodo  className='text-xl' />
                            <h6>TODO list</h6>
                        </Link>
                    </li>
                    <li >
                        <Link to={"/active"} className=' flex gap-2  items-center hover:bg-blue-800  p-2 rounded'>
                            <LiaBookReaderSolid className='text-2xl' />
                            <h6>Modules</h6>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/active"} className=' flex gap-2  items-center hover:bg-blue-800  p-2 rounded'>
                            <IoRocketOutline className='text-xl' />
                            <h6>CP ERP PRO</h6>
                        </Link>
                    </li>
                </ul>

                <div className=' flex  flex-col gap-4  text-white  font-normal   text-center '>
                    <Link to={"/active"} className=' flex gap-2  items-center hover:bg-blue-800  p-2 rounded'>
                        <IoSettingsOutline className='text-xl' />
                        <h6>Settings</h6>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
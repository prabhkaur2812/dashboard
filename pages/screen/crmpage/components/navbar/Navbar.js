import React from 'react'
import { GoHistory } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import profile3 from "../../../../../aseets/images/profile3.png"
import { IoSearchOutline } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEllipsisV } from "react-icons/fa";
import { TbFilterFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import DropDown from '../../../../../components/dropdown/Dropdown';

const Period = [
    { label: "period 2023", href: "" },
    { label: "period 2022", href: "" },
    { label: "period 2021", href: "" },
]

const Navbar = () => {
    return (
        <div>
            <nav className="border border-slate-300 rounded mt-2 mb-3 bg-slate-200   ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div >
                        <div className=' rounded flex items-center bg-white border'>
                            <input type=" " placeholder='Period 2021' className='rounded p-1 outline-0 ms-2' />
                            <DropDown
                                trigger=""
                                items={Period} />
                        </div>
                    </div>
                    <div className=" w-full md:block md:w-auto">
                        <ul className="flex flex-row gap-4 items-center">
                            <li>
                                <div className='border rounded flex items-center  bg-white '>
                                    <input type='search' className='rounded p-1 outline-0 ms-2' />
                                    <IoSearchOutline className='text-xl me-2   hover:text-blue-500' />
                                </div>

                            </li>
                            <li>
                                <a href="#" >
                                    <GoHistory className='text-xl  hover:text-blue-500' />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <IoNotificationsOutline className='text-xl  hover:text-blue-500' />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={profile3} className='h-10 w-10 ' />

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className=' flex justify-between  items-center mx-16 '>
                <span className='text-slate-400  text-base font-normal '>Basic information \<a className=' text-gray-500  text-base font-normal'>  Users & Access</a> </span>
                <div className=' flex gap-1 bg-blue-500  rounded py-1 px-3 items-center text-white'>
                    <Link to={"/addform"} className=' flex items-center gap-1'>
                        <IoAdd className='text-base ' />
                        <button>New User</button>
                    </Link>
                </div>
            </div>
            <div className='flex justify-between items-center mx-16  pb-3'>
                <div className=' flex items-center gap-3  pb-3'>
                    <span className=' text-2xl  font-semibold'>CRM & Access List</span>
                    <span className='text-gray-500  text-base font-normal'>| 3 Users Selected </span>
                    <button className=' border p-1  rounded'><RiDeleteBin6Line className='text-gray-500  text-lg font-normal' /></button>
                    <button className=' border p-1  rounded'><FaEllipsisV className='text-gray-500  text-base  font-normal' /></button>
                </div>
                <div className=' flex gap-2'>
                    <button className=' border   rounded p-1'>
                        <TbFilterFilled className='text-gray-500  text-base font-normal ' />
                    </button>
                    <div className=' border flex items-center rounded p-1 '>
                        <IoSearchOutline className='ms-2 text-gray-500  text-base font-normal' />
                        <input type="search" placeholder=' Search in list' className=' outline-0 ms-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar

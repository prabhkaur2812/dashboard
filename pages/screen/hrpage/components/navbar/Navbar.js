import React from 'react';
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import profile from "../../../../../aseets/images/profile.png";
import DropDown from '../../../../../components/dropdown/Dropdown';



const Leaves = [
    { label: "Urgent Leaves", href: "" },
    { label: "Causal Leaves", href: "" },
    { label: "Sick Leaves", href: "" },
]

const Reports = [
    { label: "Present", href: "" },
    { label: "Absent", href: "" },
    { label: "Leave", href: "" },

]
const user = [
    { label: "Account", href: "" },
    { label: "Profile", href: "" },
    { label: "Setting", href: "" },

]


const Navbar = () => {
    return (
        <div className="flex flex-row w-full justify-between bg-slate-200 p-3 ps-6">
            <div className='flex'>
                <ul className='flex gap-6'>
                    <li className='hover:font-semibold hover:text-blue-500'>
                        <Link to={""} className='flex gap-2'>
                            <HiOutlineUserGroup className='text-2xl' />
                            <h5 className='font-bold'>HR</h5>
                        </Link>
                    </li>
                    <li className='hover:text-blue-500 font-bold'>
                        <Link to={""} className="">
                            <h5 className='font-medium'>Overview</h5>
                        </Link>
                    </li>
                    <li className='hover:text-blue-500'>
                        <Link to={""} className="">
                            <h5 className='font-medium'>People</h5>
                        </Link>
                    </li>
                    <DropDown
                        trigger="Leaves"
                        items={Leaves}
                    />

                    <DropDown
                        trigger="Reports"
                        items={Reports}
                    />
                    <li className='hover:text-blue-500'>
                        <Link to={""} className="">
                            <h5 className='font-medium'>Helps</h5>
                        </Link>
                    </li>

                </ul>
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <IoNotificationsOutline className='text-xl font-bold hover:text-blue-500' />
                <DropDown
                    trigger={<img src={profile} className='h-8 w-8 ' />}
                    items={user}
                />
            </div>
        </div>
    );
};

export default Navbar;

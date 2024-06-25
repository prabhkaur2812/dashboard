import React from 'react'
import profile from "../../../../../aseets/images/profile.png";
import profile2 from "../../../../../aseets/images/profile2.png";
import profile3 from "../../../../../aseets/images/profile3.png";
import profile4 from "../../../../../aseets/images/profile4.png";
import profile5 from "../../../../../aseets/images/profile5.png";
import profile6 from "../../../../../aseets/images/profile6.png";
import profile7 from "../../../../../aseets/images/profile7.png";
import profile8 from "../../../../../aseets/images/profile8.png";
import profile9 from "../../../../../aseets/images/profile9.png";
import profile10 from "../../../../../aseets/images/profile10.png";
import profile11 from "../../../../../aseets/images/profile11.png";
import { FaRegCircleUser } from "react-icons/fa6";
// import Pagination from '../pagination/Pagination';
import Popup from '../../../../../components/popup/Popup';
import { useState } from 'react';
import Ellipsis from '../../../../../components/ellipse/Ellipse';


const Detailtable = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [popup, setpopup] = useState(false);
    const handlelistCLick = () => {
        setpopup(true);

    }
    return (
        <div className="relative overflow-x-auto  ">
            <table className={`w-full text-sm text-left rtl:text-right text-white ${popup ? "w-[70%]" : ""} `} >
                <thead className=" text-black uppercase  border-y p-2  border-gray-300 text-sm">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Full Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Username
                        </th>
                        <th scope="col" className="px-5 py-3">
                            Expire Date
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Condition
                        </th>
                        <th scope="col" className="px-3 py-3">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b border-gray-300 hover:bg-slate-100">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium">
                            <div
                                className='flex flex-row gap-2 text-black'
                                onClick={handlelistCLick}
                            >
                                <img src={profile} alt="jpg" className="h-10" />
                                <div className="flex flex-col">
                                    <span className="font-semibold hover:text-blue-500 text-base">
                                        Alexander Medvedev
                                    </span>
                                    <div className="flex text-slate-600 items-center gap-1">
                                        <FaRegCircleUser />
                                        <span className="text-sm font-medium">
                                            Sales Man , Accountant
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base hover:text-blue-500 font-semibold text-black">
                            A.Medvedev
                        </td>
                        <td className="px-5 py-4 text-base hover:text-blue-500 font-semibold text-black">
                            2029/12/30
                        </td>
                        <td className="px-2 py-4">
                            <button className="bg-red-200 text-red-500 border px-2 py-1 text-sm font-semibold border-red-400 rounded hover:bg-red-200">
                                Deactivated
                            </button>
                        </td>
                        <td className="px-2 py-4">
                            <div className="flex font-semibold hover:text-blue-500 text-base text-black items-center">
                                <span className="flex w-2 h-2 me-3 bg-red-500 rounded-full"></span>
                                Offline
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300 hover:bg-slate-100" >
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className=' flex flex-row text-black gap-2' onClick={handlelistCLick}>
                                <img src={profile2} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold hover:text-blue-500 text-base'>Marques Brownley</span>
                                    <div className='  flex  text-slate-600 items-center gap-1'>
                                        <FaRegCircleUser />
                                        <span className='text-sm font-medium '>Data Analyst</span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base  hover:text-blue-500 font-semibold text-black">M.Brownley</td>
                        <td className="px-5 py-4 text-base  hover:text-blue-500 font-semibold text-black">2029/12/30</td>
                        <td className="px-2 py-4">
                            <button className=' bg-green-100 px-2  py-1 font-semibold text-sm text-green-500 border border-green-400 rounded hover:bg-green-200'>Active</button></td>
                        <td className="px-2 py-4">
                            <div className=' flex   font-semibold hover:text-blue-500 text-base text-black items-center'>
                                <span class="flex  w-2 h-2 me-3 bg-green-500 rounded-full"></span>
                                Online
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300 hover:bg-slate-100"  >
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className=' flex flex-row text-black gap-2' onClick={handlelistCLick}>
                                <img src={profile3} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold hover:text-blue-500 text-base'>Anastasia  Golovko</span>
                                    <div className=' flex  text-slate-600 items-center gap-1'>
                                        <FaRegCircleUser />
                                        <span className='text-sm font-medium'>Stock  Accountant</span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base  hover:text-blue-500 font-semibold text-black">A.Golovko</td>
                        <td className="px-5 py-4 text-base  hover:text-blue-500 font-semibold text-black">2029/12/30</td>
                        <td className="px-2 py-4">
                            <button className=' bg-green-100 px-2  py-1 font-semibold text-sm text-green-500 border  border-green-400 rounded hover:bg-green-200'>Active</button></td>
                        <td className="px-2 py-4">
                            <div className='  flex   font-semibold hover:text-blue-500 text-base text-black items-center'>
                                <span class="flex w-2 h-2 me-3 bg-green-500 rounded-full"></span>
                                Online
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr>
                    {/* <tr className="bg-white border-b border-gray-300 hover:bg-slate-100"  >
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className=' flex flex-row text-black gap-2' onClick={handlelistCLick}>
                                <img src={profile4} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold hover:text-blue-500 text-base'>Faizur Rehman</span>
                                    <div className='  flex  text-slate-600 items-center gap-1'>
                                        <FaRegCircleUser />
                                        <span className='text-sm font-medium'>Sale Expert</span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base  hover:text-blue-500 font-semibold text-black">F.Rehman</td>
                        <td className="px-5 py-4 text-base  hover:text-blue-500 font-semibold text-black">2029/12/30</td>
                        <td className="px-2 py-4">
                            <button className=' bg-green-100 px-2  py-1 font-semibold text-sm text-green-500 border border-green-400 rounded hover:bg-green-200'>Active</button></td>
                        <td className="px-2 py-4">
                            <div className='  flex   font-semibold hover:text-blue-500 text-base text-black items-center'>
                                <span class="flex w-2 h-2 me-3 bg-green-500 rounded-full"></span>
                                Online
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300 hover:bg-slate-100"  >
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className=' flex flex-row text-black gap-2' onClick={handlelistCLick}>
                                <img src={profile5} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold hover:text-blue-500 text-base'>Emily Lynch</span>
                                    <div className='  flex  text-slate-600 items-center gap-1'>
                                        <FaRegCircleUser />
                                        <span className='text-sm font-medium'>Production Line Expert</span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base  hover:text-blue-500 font-semibold text-black">E.Lyuch</td>
                        <td className="px-5 py-4 text-base  hover:text-blue-500 font-semibold text-black">2029/12/30</td>
                        <td className="px-2 text-black py-4">
                            <button className=' bg-red-200 px-2  py-1 font-semibold text-sm text-red-500 border  border-red-400 rounded hover:bg-red-300'>Deactivated</button></td>
                        <td className="px-2 py-4">
                            <div className='  flex   font-semibold hover:text-blue-500 text-base text-black items-center'>
                                <span class="flex w-2 h-2 me-3 bg-red-500 rounded-full"></span>
                                Offline
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300 hover:bg-slate-100" >
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className=' flex flex-row text-black gap-2' onClick={handlelistCLick}>
                                <img src={profile6} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold hover:text-blue-500 text-base'>kamila Harris</span>
                                    <div className='  flex  text-slate-600 items-center gap-1'>
                                        <FaRegCircleUser />
                                        <span className='text-sm  font-medium'>R&D Expert</span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base  hover:text-blue-500 font-semibold text-black">M .Antonette</td>
                        <td className="px-5 py-4 text-base  hover:text-blue-500 font-semibold text-black">2029/12/30</td>
                        <td className="px-2 py-4">
                            <button className=' bg-red-200 px-2  py-1 font-semibold text-sm text-red-500 border  border-red-400 rounded hover:bg-red-300'>Deactivated</button></td>
                        <td className="px-2 py-4">
                            <div className='  flex   font-semibold hover:text-blue-500 text-base text-black items-center'>
                                <span class="flex w-2 h-2 me-3 bg-red-500 rounded-full"></span>
                                Offline
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300 hover:bg-slate-100"  >
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className=' flex  text-black flex-row gap-2' onClick={handlelistCLick}>
                                <img src={profile7} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold hover:text-blue-500 text-base'>Leonardo Helmo</span>
                                    <div className='  flex  text-slate-600 items-center gap-1'>
                                        <FaRegCircleUser />
                                        <span className='text-sm font-medium'>Head of Steel Line</span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base  hover:text-blue-500 font-semibold text-black">L.Helmo</td>
                        <td className="px-5 py-4 text-base  hover:text-blue-500 font-semibold text-black">2029/12/30</td>
                        <td className="px-2 py-4">
                            <button className=' bg-red-200 px-2  py-1 font-semibold text-sm text-red-500 border  border-red-400 rounded hover:bg-red-300'>Deactivated</button></td>
                        <td className="px-2 text-black py-4">
                            <div className=' flex   font-semibold hover:text-blue-500 text-base text-black items-center'>
                                <span class="flex w-2 h-2 me-3 bg-red-500 rounded-full"></span>
                                Offline
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300 hover:bg-slate-100"  >
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className=' flex flex-row text-black gap-2' onClick={handlelistCLick}>
                                <img src={profile8} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold hover:text-blue-500 text-base'>Victoria Zoriana </span>
                                    <div className=' flex  text-slate-600 items-center gap-1'>
                                        <FaRegCircleUser />
                                        <span className='text-sm font-medium'>Head of Report</span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base  hover:text-blue-500 font-semibold text-black">V.Zoriana</td>
                        <td className="px-5 py-4 text-base  hover:text-blue-500 font-semibold text-black">2029/12/30</td>
                        <td className="px-2 py-4">
                            <button className=' bg-green-100 px-2  py-1 font-semibold text-sm text-green-500 border  border-green-400 rounded hover:bg-green-200'>Active</button></td>
                        <td className="px-2 py-4">
                            <div className=' flex   font-semibold hover:text-blue-500 text-base text-black items-center'>
                                <span class="flex w-2 h-2 me-3 bg-green-500 rounded-full"></span>
                                Online
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300 hover:bg-slate-100"  >
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className=' flex  text-black flex-row gap-2' onClick={handlelistCLick}>
                                <img src={profile9} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold hover:text-blue-500 text-base'>Jessika kehinde</span>
                                    <div className='  flex  text-slate-600 items-center gap-1'>
                                        <FaRegCircleUser />
                                        <span className='text-sm font-medium'>Quality Assurance Expert </span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base  hover:text-blue-500 font-semibold text-black">J .kehinde</td>
                        <td className="px-5 py-4 text-base  hover:text-blue-500 font-semibold text-black">2029/12/30</td>
                        <td className="px-2 py-4">
                            <button className=' bg-green-100 px-2  py-1 font-semibold text-sm text-green-500 border  border-green-400 rounded hover:bg-green-200'>Active</button></td>
                        <td className="px-2 py-4">
                            <div className='  flex   font-semibold hover:text-blue-500 text-base text-black items-center'>
                                <span class="flex w-2 h-2 me-3 bg-green-500 rounded-full"></span>
                                Online
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300 hover:bg-slate-100"  >
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className=' flex flex-row text-black gap-2' onClick={handlelistCLick}>
                                <img src={profile10} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold hover:text-blue-500 text-base'>Nicolas Maider</span>
                                    <div className='  flex  text-slate-600 items-center gap-1'>
                                        <FaRegCircleUser />
                                        <span className='text-sm font-medium'>Accountant</span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base  hover:text-blue-500 font-semibold text-black">N. Maider</td>
                        <td className="px-5 py-4 text-base  hover:text-blue-500 font-semibold text-black">2029/12/30</td>
                        <td className="px-2 py-4">
                            <button className=' bg-green-100 px-2  py-1 font-semibold text-sm  text-green-500 border border-green-400 rounded hover:bg-green-200'>Active</button></td>
                        <td className="px-2 py-4">
                            <div className=' flex   font-semibold hover:text-blue-500 text-base text-black items-center'>
                                <span class="flex w-2 h-2 me-3 bg-green-500 rounded-full"></span>
                                Online
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300 hover:bg-slate-100"  >
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className=' flex flex-row text-black gap-2' onClick={handlelistCLick}>
                                <img src={profile11} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold hover:text-blue-500 text-base'>Khan Saab</span>
                                    <div className='  flex  text-slate-600 items-center gap-1'>
                                        <FaRegCircleUser />
                                        <span className='text-sm font-medium'>Production Line Expert</span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base  hover:text-blue-500 font-semibold text-black">A.Medvedev</td>
                        <td className="px-5 py-4 text-base  hover:text-blue-500 font-semibold text-black">2029/12/30</td>
                        <td className="px-2 py-4">
                            <button className=' bg-green-100 px-2  py-1 font-semibold text-sm text-green-500 border border-green-400 rounded hover:bg-green-200'>Active</button></td>
                        <td className="px-2 py-4">
                            <div className='  flex   font-semibold hover:text-blue-500 text-base text-black items-center'>
                                <span class="flex w-2 h-2 me-3 bg-green-500 rounded-full"></span>
                                Online
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr> */}
                    <tr className="bg-white border-b border-gray-300 hover:bg-slate-100"  >
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <div className=' flex flex-row text-black gap-2' onClick={handlelistCLick}>
                                <img src={profile11} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold hover:text-blue-500 text-base'>Khan Saab</span>
                                    <div className='  flex  text-slate-600 items-center gap-1'>
                                        <FaRegCircleUser />
                                        <span className='text-sm font-medium'>Production Line Expert</span>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-4 py-4 text-base  hover:text-blue-500 font-semibold text-black">A.Medvedev</td>
                        <td className="px-5 py-4 text-base  hover:text-blue-500 font-semibold text-black">2029/12/30</td>
                        <td className="px-2 py-4">
                            <button className=' bg-red-200 px-2  py-1 font-semibold text-sm text-red-500 border border-red-400 rounded hover:bg-red-300'>Deactivated</button></td>
                        <td className="px-2 py-4">
                            <div className='  flex   font-semibold hover:text-blue-500 text-base text-black items-center'>
                                <span class="flex w-2 h-2 me-3 bg-red-500 rounded-full"></span>
                                Offline
                            </div>
                        </td>
                        <td className="flex items-center px-2 py-4">
                            <Ellipsis />
                        </td>
                    </tr>
                </tbody>
            </table>
            {popup && <Popup isOpen={popup} onClose={() => setpopup(false)} />}

            {/* <Pagination /> */}
        </div>
    )
}
export default Detailtable

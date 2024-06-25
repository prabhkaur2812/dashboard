import React from 'react'
import { HiOutlineUserGroup } from "react-icons/hi";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { PiNotePencilBold } from "react-icons/pi";
import profile from "../../../../../aseets/images/profile.png";
import birthday from "../../../../../aseets/images/birthday.jpg"
import { Calendar } from '@natscale/react-calendar';

const Mainpage = () => {
    return (
        <div className=' ps-6 pe-6  pt-7 bg-slate-100'>
            <div>
                <span className=' text-xl font-semibold'> HR Management</span>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-4 pt-7">
                <div class="col-span-2">
                    <div className='flex flex-row  h-32 gap-6 '>
                        <div className=' flex gap-5 border-2  rounded bg-white shadow-lg  px-6 py-3 w-72  ' >
                            <div>
                                <HiOutlineUserGroup className='  text-white bg-gradient-to-t from-pink-400  to-orange-400 text-7xl ' />
                            </div>
                            <div className=' flex flex-col '>
                                <span className='text-lg font-semibold'>Employess</span>
                                <span className='text-3xl font-bold text-center'>105</span>
                            </div>
                        </div>
                        <div className=' flex gap-5 border-2 rounded  bg-white shadow-lg  px-6 py-3 w-72  ' >
                            <div>
                                <LiaNetworkWiredSolid className='  text-white bg-gradient-to-t from-cyan-400  to-green-400 text-7xl ' />
                            </div>
                            <div className=' flex flex-col '>
                                <span className='text-lg font-semibold'>Departments</span>
                                <span className='text-3xl font-bold text-center'>07</span>
                            </div>
                        </div>
                        <div className=' flex gap-5 border-2 rounded  bg-white shadow-lg  px-6 py-3 w-72' >
                            <div>
                                <PiNotePencilBold className='  text-white bg-gradient-to-t from-purple-400  to-indigo-400 text-7xl ' />
                            </div>
                            <div className=' flex flex-col '>
                                <span className='text-lg font-semibold'>Designation</span>
                                <span className='text-3xl font-bold text-center'>12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2">
                    <div className=' flex flex-col gap-3 p-2 bg-white  shadow-lg'>
                        <span className='text-xl font-bold '>Latest Announcements</span>
                        <div className=' flex flex-col gap-2 bg-teal-50  p-2 '>
                            <span> <a href='# ' className="text-blue-700 font-semibold">Chrismass Day | Holiday 2021  </a>| 01.03.2021 </span>
                            <p className='font-normal'>Please be informed that the office will  remains closed on 03.03.2021 on the account of Christmass Day.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' flex  h-32 justify-between  border-2  rounded bg-white shadow-lg  px-6 py-2 ' >

                        <div className=' flex flex-col gap-3  border-e-2  '>
                            <span className='font-semibold text-lg me-4 '>Attendence </span>
                            <span className='text-4xl text-blue-500  font-bold text-center'>90</span>
                        </div>
                        <div className=' flex flex-col gap-3  '>
                            <span className='text-lg font-semibold  '>Absent </span>
                            <span className='text-4xl font-bold   text-red-700 text-center'>05</span>
                        </div>
                        <div className=' flex flex-col gap-1  border-s-2'>
                            <span className='text-lg font-semibold  text-center ms-8'>Late </span>
                            <span className='text-4xl font-bold text-yellow-500 text-center'>10</span>                 </div>
                    </div>
                </div>
                <div className=' flex  gap-4   p-2 rounded shadow-lg bg-gradient-to-r from-slate-100 to-pink-300'>
                    <div >
                        <img src={profile} alt=" " className='h-24 pt-2 ms-4' />
                    </div>
                    <div className='flex flex-col gap-1 pt-1' >
                        <span className='font-semibold text-xl '>Johnsan Sabire</span>
                        <span>Birthday Today</span>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded">
                            Wish Him
                        </button>
                    </div>

                </div>


                <div class="col-span-2  p-2 rounded shadow-lg h-screen bg-white">
                    <div className=' flex  flex-col'>
                        <span className=' p-2 font-bold text-xl '>My Leave Calendar</span>
                        {/* <div className=' flex  justify-between pt-4' >
                            <div>
                                <button className="border-2 bg-white text-black px-4 hover:bg-blue-700 hover:text-white font-bold p-1 ">
                                    Today
                                </button>
                            </div>
                            <div>
                                <span className=' text-xl font-bold'>May 2021</span>
                            </div>

                            <div class="columns-3 flex ">
                                <button className="border-2 bg-white text-black px-4 hover:bg-blue-700 hover:text-white font-bold p-1">
                                    Day
                                </button>
                                <button className="border-2 bg-white text-black px-4 hover:bg-blue-700 hover:text-white font-bold p-1 ">
                                    Week
                                </button>
                                <button className="border-2 bg-white text-black px-4 hover:bg-blue-700 hover:text-white font-bold p-1 ">
                                    Month
                                </button>

                            </div>
                        </div> */}
                        <Calendar className='   flex justify-center ' />
                    </div>
                </div>
                <div class="grid grid-rows-4  grid-flow-col gap-4">
                    <div className='bg-white shadow-lg   rounded p-3'>
                        <span className=' text-lg font-semibold'> Employees Absent Today </span>
                        <div className=' flex justify-between py-3'>
                            <span>01 May 2021</span>
                            <span>ID No.</span>
                        </div>
                        <div className=' flex justify-between'>
                            <div className=' flex flex-row gap-2'>
                                <img src={profile} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold'>Khan Sab</span>
                                    <span className='text-xs'>dsfgghrhhthtr</span>
                                </div>
                            </div>
                            <span>7006</span>
                        </div>
                        <div className=' flex justify-between py-1  '>
                            <div className=' flex flex-row gap-2'>
                                <img src={profile} alt='jpg' className=' h-10' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold'>Khan Sab</span>
                                    <span className='text-xs'>dsfgghrhhthtr</span>
                                </div>
                            </div>
                            <span>3966</span>
                        </div>
                        <div className=' flex justify-between '>
                            <div className=' flex flex-row gap-2'>
                                <img src={profile} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className=' font-semibold'>Khan Sab</span>
                                    <span className='text-xs'>dsfgghrhhthtr</span>
                                </div>
                            </div>
                            <span>3966</span>
                        </div>

                    </div>
                    <div className='bg-white shadow-lg  rounded  p-3'>
                        <span className=' text-lg font-semibold'> Employees on Leave </span>
                        <div className=' flex justify-between py-3'>
                            <span>01 May 2021</span>
                            <span>Status</span>
                        </div>
                        <div className=' flex justify-between '>
                            <div className=' flex flex-row gap-2'>
                                <img src={profile} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold'>Khan Sab</span>
                                    <span className=' text-xs'>May 1 to May 12</span>
                                </div>
                            </div>
                            <span className=' text-blue-600'>Approved</span>
                        </div>
                        <div className=' flex justify-between py-1 '>
                            <div className=' flex flex-row gap-2'>
                                <img src={profile} alt='jpg' className=' h-10' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold'>Ram</span>
                                    <span className=' text-xs '>Only today</span>
                                </div>
                            </div>
                            <span className='text-red-600'>Rejected</span>
                        </div>
                        <div className=' flex justify-between'>
                            <div className=' flex flex-row gap-2'>
                                <img src={profile} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold'>Abdullah</span>
                                    <span className=' text-xs '>May 1 to May?</span>
                                </div>
                            </div>
                            <span className=' text-blue-600'>Approved</span>
                        </div>

                    </div>
                    <div className='bg-white shadow-lg  rounded  p-3'>
                        <span className=' text-lg font-semibold'> About to End </span>
                        <div className=' flex justify-between  bg-slate-200  py-3'>
                            <span>Employees</span>
                            <span>Deadline</span>
                        </div>
                        <div className=' flex justify-between '>
                            <div className=' flex flex-row gap-2'>
                                <img src={profile} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold'>Khan Sab</span>
                                    <span className=' text-xs'>May 1 to May 12</span>
                                </div>
                            </div>
                            <span className=' text-blue-600'>Approved</span>
                        </div>
                        <div className=' flex justify-between py-1 '>
                            <div className=' flex flex-row gap-2'>
                                <img src={profile} alt='jpg' className=' h-10' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold'>Ram</span>
                                    <span className=' text-xs '>Only today</span>
                                </div>
                            </div>
                            <span className='text-red-600'>Rejected</span>
                        </div>
                        <div className=' flex justify-between'>
                            <div className=' flex flex-row gap-2'>
                                <img src={profile} alt='jpg' className=' h-10 ' />
                                <div className=' flex flex-col'>
                                    <span className='font-semibold'>Abdullah</span>
                                    <span className=' text-xs '>May 1 to May?</span>
                                </div>
                            </div>
                            <span className=' text-blue-600'>Approved</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mainpage

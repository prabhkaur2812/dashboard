import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import React from 'react';
import profile from "../../aseets/images/profile.png"
import { FaRegEdit } from "react-icons/fa";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

function Popup({ isOpen, onClose = () => null }) {
    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative  z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-end sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <Dialog.Panel className="relative transform overflow-hidden rounded text-left sm:w-[400px] ">
                                <div className="  border  border-gray-200 p-2 bg-white  ">
                                    <div className=" relative h-24 rounded bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400">
                                    </div>
                                    <div className="flex flex-col  ">
                                        <img className="w-24 h-24 absolute top-12  left-8   " src={profile} alt="" />
                                        <div className='px-3 py-1'>
                                            <p className="text-2xl font-bold mt-7">Alexander Medvedev</p>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    <p className="text-gray-700 text-base">Sales Man , Accountant </p>
                                                </div>
                                                <div className='flex  gap-2'>
                                                    <button className='border p-1 rounded '><FaRegEdit className='text-gray-600 text-lg ' /></button>
                                                    <button className='border p-1  rounded '><IoEllipsisVerticalSharp className='text-gray-600  text-lg' /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between pt-3 pb-2'>
                                            <button className=' border-2  hover:bg-blue-200   flex gap-2 items-center border-blue-400 shadow-lg rounded px-8 py-1' >
                                                <IoIosAddCircleOutline className='text-blue-500 text-xl' />
                                                <p className=' text-normal text-blue-500'>Assign Task</p>
                                            </button>
                                            <button className='bg-blue-100 hover:bg-blue-200 flex gap-2 items-center shadow-lg rounded px-8 py-1 '>
                                                <CiLocationArrow1 className='text-blue-500 text-xl' />
                                                <p className='  text-normal text-blue-500'>Message</p>
                                            </button>

                                        </div>
                                    </div>

                                    <div className="mb-1 border-y-2  p-3">
                                        <h2 className="text-lg font-bold  ">Contact information</h2>
                                        <div className=' flex flex-col  gap-2'>
                                            <div >
                                                <div className='flex gap-2  text-gray-400 items-center'>
                                                    <MdOutlineEmail className='text-xl' />
                                                    <span>E-mail</span>
                                                </div>
                                                <span className='text-base'>a.medvedev@gmail.com</span>
                                            </div>
                                            <div>
                                                <div className='flex gap-2  text-gray-400 items-center'>
                                                    <IoCall className='text-xl' />
                                                    <span>Phone</span>
                                                </div>
                                                <span>(616) 396-8484</span>
                                            </div>
                                            <div>
                                                <div className='flex gap-2  text-gray-400 items-center'>
                                                    <IoLocationOutline className='text-xl' />
                                                    <span>Address</span>
                                                </div>
                                                <span> 84 E 8th St -Town Holland - Michigan- 49423 -Unitied States</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className=" p-2">
                                        <h2 className="text-lg font-bold mb-1">Alexander's  upcoming tasks</h2>
                                        <div className=' flex flex-col gap-2 px-3'>
                                            <div className=' flex gap-4 items-center'>
                                                <span className='text-gray-500'>Today</span>
                                                <div className=' flex flex-col  bg-indigo-200 border-l-4  w-64 rounded px-2 py-1 border-indigo-800'>
                                                    <span className=' text-black text-base '>Sign the upcoming contract</span>
                                                    <span className=' text-gray-500 text-sm'>Due date : Tue , july 15 ,2023</span>
                                                </div>
                                            </div>
                                            <div className=' flex gap-3 items-center'>
                                                <span className='text-gray-500'>july 20</span>
                                                <div className=' flex flex-col  bg-pink-200 border-l-4  w-64 rounded py-1 px-2 border-pink-600'>
                                                    <span className=' text-black text-base '>Confirm the personal payments </span>
                                                    <span className=' text-gray-500 text-sm'>Due date : Thu , july 20 ,2023</span>
                                                </div>
                                            </div>
                                            <div className=' flex gap-3 items-center'>
                                                <span className='text-gray-500'>july 20</span>
                                                <div className=' flex flex-col  bg-sky-200 border-l-4  w-64 rounded px-2 py-1 border-sky-600'>
                                                    <span className=' text-black text-base '>Check the cargo's arrival</span>
                                                    <span className=' text-gray-500 text-sm'>Due date :Thu , july 20 ,2023</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
export default Popup;


import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { FiFile } from "react-icons/fi";
import { GoHistory } from "react-icons/go";
import { GoDuplicate } from "react-icons/go";
import { FaRegFileExcel } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Ellipsis() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="items-center">
                    <IoEllipsisVerticalSharp className="text-black text-xl"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className=' flex  font-semibold gap-2 '>
                                        <FiFile className='text-xl' />
                                        View details
                                    </div>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className=' flex  font-semibold gap-2 '>
                                        <GoHistory className='text-xl' />
                                        Item history
                                    </div>
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className=' flex  font-semibold gap-2 '>
                                        <GoDuplicate className='text-xl' />
                                        Duplicate
                                    </div>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className=' flex  font-semibold gap-2 '>
                                        <FaRegFileExcel className='text-xl' />
                                        Set as admin
                                    </div>
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className=' flex  font-semibold gap-2 '>
                                        <FiEdit className='text-xl' />
                                        Edit item
                                    </div>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className=' flex  font-semibold gap-2  text-red-500'>
                                        <MdDeleteOutline className='text-xl' />
                                        Delete item
                                    </div>
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}










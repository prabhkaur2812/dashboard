import React from 'react'
import profile5 from "../../../../../aseets/images/profile5.png"

export default function Navbar() {
    return (
        <div className=' flex justify-between  items-center bg-gray-100 p-1 ' >
            <label className="text-3xl font-semibold text-gray-800">
                ToDo List
            </label>
            <div>
                <img src={profile5} className='w-12 h-12' />
            </div>
            </div>
    )
}

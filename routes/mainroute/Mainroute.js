import React from 'react'
import Sidebar from '../../pages/layout/components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Mainroute() {
    return (
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

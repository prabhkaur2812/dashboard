import React from 'react'
import Navbar from './components/navbar/Navbar'
import Mainpage from './components/mainpage/Mainpage'

const Hr = () => {
    return (
        <div className='overflow-y-auto w-full h-[calc(100vh)]'>
            <Navbar />
            <Mainpage />
        </div>
    )
}
export default Hr

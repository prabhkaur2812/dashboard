import React from 'react'
import Detailtable from './components/detailtable/Detailtable'
import Navbar from './components/navbar/Navbar'

const CrmPage = () => {
    return (
        <div className=' p-3 overflow-y-auto w-full h-[calc(100vh)]'>
            <Navbar />
            <Detailtable />
        </div>
    )
}
export default CrmPage

import React, { useState } from 'react';
// import Popup from '../popup/Popup';
import Button from '../../../../../components/button/Button';
import { FaCalendarMinus } from "react-icons/fa";
function Card({content}) {
    return (
        <div className="flex flex-col ">
            {content.map((item, index) => (
                <div key={index} className="w-full px-1 py-2" >
                    <div className="bg-white border border-slate-300 rounded-lg shadow px-2">
                        <div className={`flex justify-between items-center text-sm text-gray-900 p-2 rounded-lg `}>
                            <img src={item.img} className='w-10 h-10' />
                            <Button
                                text={'High'}
                                className={"border px-2 py-1  rounded-full border-pink-400 bg-pink-200 hover:bg-pink-300"} />
                        </div>
                        {item.text}
                        <div className='flex gap-2 pt-3 items-center'>
                            <Button
                                text={'Prototype'}
                                className={"border  text-sm text-blue-500 px-1  bg-blue-100 hover:bg-blue-200"} />
                            <Button
                                text={'Presentation'}
                                className={"border  text-sm  text-blue-500 px-1  bg-blue-100 hover:bg-blue-200"} />
                            <Button
                                text={'Design'}
                                className={"border   text-sm text-blue-500 px-1  bg-blue-100 hover:bg-blue-200"} />
                        </div>
                        <div className='flex gap-2 items-center py-3 '>
                            <FaCalendarMinus />
                            <span className=' text-sm'> 25 june 2024 - 16 sep 2024</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Card;







import React from 'react';
import CheckBox from '../../../../../../../components/checkbox/Checkbox';
import Input from '../../../../../../../components/input/Input';
import AddMonth from '../../../../../../../components/addmonth/Addmonth';
import ClockData from '../../../../../../../components/clockdata/Clockdata';

import Selector from '../../../../../../../components/selector/Selector';
import Button from '../../../../../../../components/button/Button';

export default function Addform() {
    return (
        <div className="flex border w-full">
            <div className="w-full p-3 border">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase mb-4">
                    Add New Users
                </h1>
                <div className='space-y-3'>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-800">
                            Name
                        </label>
                        <Input
                            type="Name"
                            placeholder="Name"
                            className="h-8 bg-gray-200" />
                    </div>
                    <CheckBox />
                    <div className="flex flex-col">
                        <label htmlFor="percentage" className="text-sm font-semibold text-gray-800">
                            Percentage
                        </label>
                        <Input
                            type=" text"
                            placeholder=" % "
                            className="h-8 bg-gray-200" />
                    </div>
                    {/* <Options /> */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="categories" className="text-sm font-semibold text-gray-800">
                                Categories
                            </label>
                            <Selector className="h-8 bg-gray-200" />
                        </div>
                        <div>
                            <label htmlFor="participants" className="text-sm font-semibold text-gray-800">
                                Participants
                            </label>
                            <Selector className="h-8 bg-gray-200" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="data" className="text-sm font-semibold text-gray-800">
                                Data
                            </label>
                            <AddMonth />
                        </div>
                        <div>
                            <label htmlFor="final-data" className="text-sm font-semibold text-gray-800">
                                Data (Final)
                            </label>
                            <AddMonth />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="timing" className="text-sm font-semibold text-gray-800">
                                Timing
                            </label>
                            <ClockData />
                        </div>
                        <div>
                            <label htmlFor="final-timing" className="text-sm font-semibold text-gray-800">
                                Timing (Final)
                            </label>
                            <ClockData />
                        </div>
                    </div>
                    <div>
                       <Button
                        text={'Add User'}
                        className={"border border-slate-200 hover:bg-slate-100"}
                        onClick={() => alert('adding member button')}
                       
                       />
                    </div>
                </div>
            </div>
        </div>
    );
}

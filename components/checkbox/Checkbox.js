import React from 'react'

const CheckBox = () => {
    return (


        <div>
            <label
                for="text"
                className=" text-sm font-semibold text-gray-800" >
                Gender
            </label>
            <div className="flex items-center  mb-4">
                <input
                    id="default-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium  "
                >
                    Male
                </label>
            </div>
            <div className="flex items-center">
                <input
                    defaultChecked=""
                    id="checked-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium  "
                >
                    Female
                </label>
            </div>
        </div>

    )
}

export default CheckBox


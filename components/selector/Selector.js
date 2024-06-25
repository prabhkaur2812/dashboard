import { useState } from "react";
import Select from "react-tailwindcss-select";

const option = [
    { value: "SC", label: " SC" },
    { value: "BC", label: " BC" },
    { value: "OBC", label: " OBC" }
];

const Selector = () => {
    
    const [Categories, setcategories] = useState(null);

    const handleChange = value => {
        console.log("value:", value);
        setcategories(value);
    };
    return (
        <Select
            value={Categories}
            onChange={handleChange}
            options={option}
        />
    );
};
export default Selector;

// import React from 'react';
// const Input = ({ type, name, id, value, onChange, required, placeholder, className }) => {
//     return (
//         <input
//             type={type}
//             name={name}
//             id={id}
//             value={value}
//             onChange={onChange}
//             required={required}
//             placeholder={placeholder}
//             className={`mt-1 block w-full p-2 border ${className}`}
//         />
//     );
// }
// export default Input;



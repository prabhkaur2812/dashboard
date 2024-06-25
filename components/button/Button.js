// import React from 'react'

// export default function Button() {
//     return (
//         <div>
//             <button className="w-32 px-4 py-2 tracking-wide text-white transition-colors 
//       duration-200 transform bg-indigo-700 rounded-md 
//       hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
//                 Add User
//             </button>
//         </div>
//     )
// }
import React from 'react';
function  Button({ icon: Icon, text: Text, className, disabled = false, onClick = () => null }) {
  return (
      <button
        onClick={onClick}
        type={"button"}
        className={`flex items-center rounded-lg  ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={disabled}
      >
        {Icon}&nbsp;{Text}
      </button>
  );
}
export default Button;
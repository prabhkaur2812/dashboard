import React from 'react'
import Card from '../card/Card'
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import Button from '../../../../../components/button/Button';
import profile2 from "../../../../../aseets/images/profile2.png";
import profile3 from "../../../../../aseets/images/profile3.png";
import profile4 from "../../../../../aseets/images/profile4.png";

import { IoIosBookmark } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaCircleQuestion } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import profile6 from "../../../../../aseets/images/profile6.png";
import profile7 from "../../../../../aseets/images/profile7.png";
import profile8 from "../../../../../aseets/images/profile8.png";
import profile9 from "../../../../../aseets/images/profile9.png";


const Content = [
  { text: 'Create Pres', Button, link: "", img: profile6 },
  { text: ' Design new Hp', icon: <IoIosBookmark />, icons: <FaCircleQuestion />, link: "", img: profile7 },
  { text: 'A/B test on HP', icon: <SiMinutemailer />, icons: <FaCircleQuestion />, link: "", img: profile8 },
  { text: 'Testing Client App', link: "", img: profile9 },
];
const Progress = [
  { text: 'Create Pres', Button, link: "", img: profile2 },
  { text: 'A/B tast on HP', Button, link: "", img: profile3 },

];
const Done = [
  { text: 'Create Pres', Button, link: "", img: profile4 },
];

export default function Userlist() {
  return (
    <div className='bg-gray-100 mt-3 p-3'>
      <div className="grid grid-cols-3">
        <div className="px-4">
          <div className=' flex justify-between items-center'>
            <Button
              text={'ToDo'}
              className={"text-black font-semibold py-1 px-3   text-sm"}
            />
            <PiDotsThreeVerticalBold />
          </div>
          <Card content={Content}/>
        </div>
        <div className=" px-4">
          <div className=' flex justify-between items-center'>
            <Button
              text={'In progress'}
              className={"text-black font-semibold py-1 px-3   text-sm"}
            />
            <PiDotsThreeVerticalBold />
          </div>
          <Card content={Progress}/>
           </div>
        <div className="  px-4">
          <div className=' flex justify-between items-center'>
            <Button
              text={'Done'}
              className={"text-black font-semibold py-1 px-3   text-sm"}
            />
            <PiDotsThreeVerticalBold />
          </div>
          <Card content={Done}/>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';


export default function ClockData() {
  const [value, onChange] = useState('10:00');

  return (
    <div>
      <TimePicker className=" w-full " onChange={onChange} value={value} />
    </div>
  );
}
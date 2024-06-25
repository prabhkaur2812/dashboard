import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function AddMonth() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <DatePicker className="w-full p-1 rounded " onChange={onChange} value={value} />
        </div>
    );
}
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const selectDateHandler = (d) => {
        setStartDate(d);
    };
    const today = new Date();
    return (
        <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={selectDateHandler}
            minDate={today}
            todayButton={'Today'}
        />
    );
};

export default DatePickerComponent;

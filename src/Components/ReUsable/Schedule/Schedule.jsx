import React from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import Button from "../Button/Button";


const Schedule = () => {
    const [state, setState] = useState({
  selection: {
    startDate: new Date(),
    endDate: null,
    key: 'selection'
  },
  compare: {
    startDate: new Date(),
    endDate: addDays(new Date(), 3),
    key: 'compare'
  }
});
  return (
    <div className="lg:w-[50vw] border p-6 shadow-xl">
      <h2 className="text-4xl font-semibold font-mono mb-6 text-center"> Schedule a Showing</h2>
      <p className="text-center mb-8 w-[30vw] mx-auto">
        I would love to show you our beautiful property. Please select your
        preferred date and time below. I will be in touch shortly to confirm
        your appointment.
      </p>

      <DateRangePicker
  onChange={item => setState({ ...state, ...item })}
  months={1}
  minDate={addDays(new Date(), -300)}
  maxDate={addDays(new Date(), 900)}
  direction="vertical"
  scroll={{ enabled: true }}
  ranges={[state.selection, state.compare]}
/>

<div className="lg:flex justify-between w-[40vw] mx-auto mt-2 p-2 items-center">
        <div> <Button value={"IN PRESENT"}></Button></div>
        <div> <Button value={"Via Video"}></Button></div>
      </div>
      <div className="text-center"><Button value={'NEXT'}></Button></div>
    </div>
  )
};

export default Schedule;

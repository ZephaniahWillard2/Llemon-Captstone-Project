import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm/BookingForm';
import { fetchAPI, submitAPI } from '../Utils/SimulateApi';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = () => {
  return fetchAPI(new Date());
};

const Main = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e, formValue) => {
    e.preventDefault();
    const isSuccess = submitAPI(formValue);
    setIsFormSubmitted(isSuccess);
  };

  return (
    <main style={{display:'flex'}}>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onFormSubmit={handleFormSubmit}
        isFormSubmitted={isFormSubmitted}
      />
      <img
        src='https://images.pexels.com/photos/5962044/pexels-photo-5962044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        className='flex-image'/>
    </main>
  );
};

export default Main;

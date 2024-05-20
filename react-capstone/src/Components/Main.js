import React, { useState, useEffect, useReducer } from 'react';
import BookingForm from './BookingForm';


const Main = ({availableTimes, handleDateChange, handleTimeChange, handleGuestChange})=>{



    const updateTimes = (availableTimes, date) =>{

    };
    const initializeTimes = initializeAvailableTimes =>{

    }

    const [availableTimes, dispatchOnDateChange] = useReducer(
        updateTimes, [], initializeTimes
    );





    useEffect(() => {
      if (date) {
        const fetchAvailableTimes = async () => {
          await new Promise((resolve) => setTimeout(resolve, 500));

          const newTimes = [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
          ].sort(() => Math.random() - 0.5);

          setAvailableTimes(newTimes);
        };

        fetchAvailableTimes();
      }
    }, [date]);






    return(
        <main>Main
            <BookingForm
                availableTimes={availableTimes}
                handleDateChange={handleDateChange}
                handleTimeChange={handleTimeChange}
                handleGuestChange={handleGuestChange}
                dispatchOnDateChange={dispatchOnDateChange}
                />
        </main>
    );
};

export default Main;
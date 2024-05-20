import React, { useState, useEffect, useReducer } from 'react';
import BookingForm from './BookingForm';


const Main = ({availableTimes, handleDateChange, handleTimeChange, handleGuestChange})=>{
   
    const [availableTimes, setAvailableTimes] = useState([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ]);

    const updateTimes = (availableTimes, date) =>{

    };
    const initializeTimes =(initializeAvailableTimes)=>{

    }



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

    const handleDateChange = (e) => setDate(e.target.value);
    const handleTimeChange = (e) => setTime(e.target.value);
    const handleGuestChange = (e) => setGuests(e.target.value);




    return(
        <main>Main
            <BookingForm availableTimes={availableTimes} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange} handleGuestChange={handleGuestChange}/>
        </main>
    );
};

export default Main;
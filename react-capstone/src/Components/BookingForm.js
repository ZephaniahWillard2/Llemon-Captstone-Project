import React, { useState, useEffect } from 'react';
import RadioButton from './RadioButton';
import './BookingFormStyles.css'

const BookingForm = ({availableTimes, dispatchOnDateChange})=>{
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { date, time, guests });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value)
  };

  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestChange = (e) => setGuests(e.target.value);


//RadioButton Code
  const [selectedOption, setSelectedOption] = useState('option1');

  function handleChange(e) {
    setSelectedOption(e.target.value);

  };

    return(
        <div className='grid-container'>
            <h1 style={{color:'white'}}>Reserve a Table</h1>
            <h2 style={{color:'white'}}>Make a Reservation at Your Local Little Lemon Restaraunt!</h2>
            <h4 style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam.
            </h4> <br></br>
            <form className='form-container' onSubmit={handleSubmit}>

                    <label htmlFor='name-input' id='name-label'>Name </label>
                    <input type='text' id='name-input' name="name" placeholder='Name'></input>

                    <label htmlFor='partyNumber-input' id='partyNumber-label'>Party Size </label>
                    <input type='number' id='partyNumber-input' name="partyNumber" max={15} value={guests} onChange={handleGuestChange} placeholder='Party Size'></input>

                    <RadioButton selectedOption={selectedOption} handleChange={handleChange} />

                    <label htmlFor='date-input' id='date-label'>Choose Date </label>
                    <input type='date' id='date-input' name="date" value={date} onChange={handleDateChange}></input>

                    <label htmlFor='time-select' id='time-label'>Choose Time </label>
                    <select type='time' id='time-select' name="time" value={time} onChange={handleTimeChange}>
                        {availableTimes.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                    </select>

                    <label htmlFor='email-input' id='email-label'>Email </label>
                    <input type='email' id='email-input' name="email" placeholder='Email'></input>

                    <label htmlFor='phone-input' id='phone-label'>Phone (Optional) </label>
                    <input type='phone' id='phone-input' name="phone" placeholder='Phone'></input>
                    <button type='submit' id='reserve-button'>Submit Reservation</button>


            </form>
        </div>
    )
};

export default BookingForm;
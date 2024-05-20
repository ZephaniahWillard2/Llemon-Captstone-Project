import React, { useState } from 'react';
import RadioButton from './RadioButton';

const BookingForm = ()=>{
  const availableTimes = useState([
    
  ])




  const [selectedOption, setSelectedOption] = useState('option1');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

    return(
        <div className='grid-container'>
            <h1 style={{color:'white'}}>Reserve a Table</h1>
            <h2 style={{color:'white'}}>Make a Reservation at Your Local Little Lemon Restaraunt!</h2>
            <h4 style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam.
            </h4> <br></br>
            <form className='form-container'>

                    <label htmlFor='name-input' id='name-label'>Name </label>
                    <input type='text' id='name-input' name="name" placeholder='Name'></input>

                    <label htmlFor='partyNumber-input' id='partyNumber-label'>Party Size </label>
                    <input type='number' id='partyNumber-input' name="partyNumber" max={15} placeholder='Party Size'></input>

                    <RadioButton selectedOption={selectedOption} handleChange={handleChange} />

                    <label htmlFor='date-input' id='date-label'>Choose Date </label>
                    <input type='date' id='date-input' name="date"></input>

                    <label htmlFor='time-select' id='time-label'>Choose Time </label>
                    <select type='time' id='time-select' name="time" >
                      <option>17:00</option>
                      <option>18:00</option>
                      <option>19:00</option>
                      <option>20:00</option>
                      <option>21:00</option>
                      <option>22:00</option>

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
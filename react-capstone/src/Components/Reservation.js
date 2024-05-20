import React, { useState } from 'react';
import RadioButton from './RadioButton';

const Reservation = ()=>{
  const [selectedOption, setSelectedOption] = useState('option1');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

    return(
        <div className='grid-container'>
            <h1>Reserve a Table</h1>
            <h2>Make a Reservation at Your Local Little Lemon Restaraunt!</h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam.
            </h4> <br></br>
            <form className='form-container'>

                    <label htmlFor='name-input' id='name-label'>Name </label>
                    <input type='text' id='name-input' name="name" placeholder='Name'></input>

                    <label htmlFor='partyNumber-input' id='partyNumber-label'>Party Size </label>
                    <input type='number' id='partyNumber-input' name="partyNumber" placeholder='Party Size'></input>

                    <RadioButton selectedOption={selectedOption} handleChange={handleChange} />

                    <label htmlFor='date-input' id='date-label'>Date </label>
                    <input type='date' id='date-input' name="date"></input>

                    <label htmlFor='time-input' id='time-label'>Time </label>
                    <input type='time' id='time-input' name="time" ></input>

                    <label htmlFor='email-input' id='email-label'>Email </label>
                    <input type='email' id='email-input' name="email" placeholder='Email'></input>

                    <label htmlFor='phone-input' id='phone-label'>Phone (Optional) </label>
                    <input type='phone' id='phone-input' name="phone" placeholder='Phone'></input>

            </form>
        </div>
    )
};

export default Reservation;
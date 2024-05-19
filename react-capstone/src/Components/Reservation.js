import React, { useState } from 'react';

import RadioButton from './RadioButton';

const Reservation = ()=>{
  const [selectedOption, setSelectedOption] = useState('option1');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

    return(
        <form>
            <h1>Make a Reservation</h1>
            <label htmlFor='name'>Name </label>
            <input type='text' id='name' name="name" placeholder='Name'></input>
            <br></br>
            <label htmlFor='partyNumber'>Party Number </label>
            <input type='number' id='partyNumber' name="partyNumber" placeholder='Party Number'></input>
            <RadioButton selectedOption={selectedOption} handleChange={handleChange} />
            <br></br>
            <label htmlFor='date'>Date </label>
            <input type='date' id='date' name="date" placeholder='Date'></input>
            <br></br>
            <label htmlFor='time'>Time </label>
            <input type='time' id='time' name="time" placeholder='Time'></input>
            <br></br>
            <label htmlFor='email'>Email </label>
            <input type='email' id='email' name="email" placeholder='Email'></input>
            <br></br>
            <label htmlFor='phone'>Phone (Optional) </label>
            <input type='phone' id='phone' name="phone" placeholder='Phone (Optional)'></input>

        </form>
    )
};

export default Reservation;
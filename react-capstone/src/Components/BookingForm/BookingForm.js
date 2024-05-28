import React, { useState, useEffect } from 'react';
import RadioButton from '../RadioButton';
import './BookingFormStyles.css'

const BookingForm = ({ availableTimes = [17, 18, 19], dispatchOnDateChange = () => {}, onFormSubmit, isFormSubmitted }) => {
  const defaultTime = availableTimes.length > 0 ? availableTimes[0] : '';
  const [formValue, setFormValue] = useState({
    date: "",
    time: defaultTime,
    guests: ""
  });

  const handleInputChange = (e) => {
    if (e.target.name === 'date') {
      dispatchOnDateChange(e.target.value);
    }
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const [selectedOption, setSelectedOption] = useState('option1');

  function handleChange(e) {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    if (isFormSubmitted) {
      // Reset form or show a success message
      setFormValue({
        date: "",
        time: availableTimes.length > 0 ? availableTimes[0] : '',
        guests: ""
      });
    }
  }, [isFormSubmitted, availableTimes]);

  return (
    <div className='grid-container'>
      <h2>Make a Reservation!</h2>
      
      <form className='form-container' onSubmit={(e) => onFormSubmit(e, formValue)}>

        <label htmlFor='name-input' id='name-label'>Name </label>
        <input 
            type='text' 
            id='name-input' 
            name="name" 
            placeholder='Name'
        />

        <label htmlFor='partyNumber-input' id='partyNumber-label'>Party Size </label>
        <input 
            type='number'
            id='partyNumber-input'
            name="partyNumber"
            onChange={handleInputChange}
            placeholder='Party Size'
            className={isFormSubmitted && !formValue.guests ? "error" : ""}
        />

        <RadioButton selectedOption={selectedOption} handleChange={handleChange} />

        <label htmlFor='date-input' id='date-label'>Choose Date </label>
        <input
            type='date'
            id='date-input'
            name="date"
            onChange={handleInputChange}
            className={isFormSubmitted && !formValue.date ? "error" : ""}
        />

        <label htmlFor='time-select' id='time-label'>Choose Time </label>
        <select
            type='time'
            id='time-select'
            name="time"
            value={formValue.time}
            onChange={handleInputChange}
            className={isFormSubmitted && !formValue.time ? "error" : ""}
        >
            {availableTimes.map(time => (
              <option key={time}>{time}</option>
            ))}
        </select>

        <label htmlFor='email-input' id='email-label'>Email </label>
        <input type='email' id='email-input' name="email" placeholder='Email'/>

        <label htmlFor='phone-input' id='phone-label'>Phone (Optional) </label>
        <input type='phone' id='phone-input' name="phone" placeholder='Phone'/>
        <button type='submit' id='reserve-button'>Submit Reservation</button>

        
      </form>

    </div>
  );
};

export default BookingForm;

















// import React, { useState, useEffect } from 'react';
// import RadioButton from './RadioButton';

// const BookingForm = ({availableTimes=[], dispatchOnDateChange, onFormSubmit})=>{
//   const defaultTime = availableTimes.length > 0 ? availableTimes[0] : '';
//   const [formValue, setFormValue] = useState({
//     date:"",
//     time: defaultTime,
//     guests:""
//   });
 

//   const handleInputChange = (e) =>{
//     if(e.target.name === 'date'){
//       dispatchOnDateChange(e.target.value)
//     }
//     setFormValue({
//       ...formValue,
//       [e.target.name]: e.target.value,
//     });
//   }


// //RadioButton Code
//   const [selectedOption, setSelectedOption] = useState('option1');

//   function handleChange(e) {
//     setSelectedOption(e.target.value);

//   };

//     return(
//         <div className='grid-container'>
//             <h1 style={{color:'white'}}>Reserve a Table</h1>
//             <h2 style={{color:'white'}}>Make a Reservation at Your Local Little Lemon Restaraunt!</h2>
//             <h4 style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                 Ut enim ad minim veniam.
//             </h4> <br></br>
//             <form className='form-container' onSubmit={(e) => onFormSubmit(e, formValue)}>

//                     <label htmlFor='name-input' id='name-label'>Name </label>
//                     <input type='text' id='name-input' name="name" placeholder='Name'></input>

//                     <label htmlFor='partyNumber-input' id='partyNumber-label'>Party Size </label>
//                     <input type='number' id='partyNumber-input' name="partyNumber" onChange={handleInputChange} placeholder='Party Size'></input>

//                     <RadioButton selectedOption={selectedOption} handleChange={handleChange} />

//                     <label htmlFor='date-input' id='date-label'>Choose Date </label>
//                     <input type='date' id='date-input' name="date" onChange={handleInputChange}></input>

//                     <label htmlFor='time-select' id='time-label'>Choose Time </label>
//                     <select type='time' id='time-select' name="time" value={formValue.time} onChange={handleInputChange}>
//                         {availableTimes.map(time => (
//                           <option key={time}>{time}</option>
//                         ))}
//                     </select>

//                     <label htmlFor='email-input' id='email-label'>Email </label>
//                     <input type='email' id='email-input' name="email" placeholder='Email'></input>

//                     <label htmlFor='phone-input' id='phone-label'>Phone (Optional) </label>
//                     <input type='phone' id='phone-input' name="phone" placeholder='Phone'></input>
//                     <button type='submit' id='reserve-button'>Submit Reservation</button>


//             </form>
//         </div>
//     )
// };

// export default BookingForm;
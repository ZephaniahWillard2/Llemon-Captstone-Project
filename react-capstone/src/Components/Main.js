import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';
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
    <main>
      Main
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onFormSubmit={handleFormSubmit}
        isFormSubmitted={isFormSubmitted}
      />
       <div>
        <input style={{color: 'black'}}>Name</input>
        <button>Button</button>
      </div>
    </main>
  );
};

export default Main;












// import React, { useReducer, useState } from 'react';
// import BookingForm from './BookingForm';
// import { fetchAPI, submitAPI } from '../Utils/SimulateApi';


// const updateTimes = (availableTimes, date) =>{
//   const response = fetchAPI(new Date(date))
//   return response.length !== 0 ? response : availableTimes
// };


// const initializeTimes = initializeAvailableTimes =>
//   [...initializeAvailableTimes, ...fetchAPI(new Date())];



// const Main = ()=>{
//   const [availableTimes, dispatchOnDateChange] = useReducer(
//     updateTimes, [], initializeTimes
// );

//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setIsFormSubmitted(true);
    
//   }
// //dev-api

//     return(
//         <main>Main
//             <BookingForm
//                 availableTimes={availableTimes}
//                 dispatchOnDateChange={dispatchOnDateChange}
//                 onFormSubmit={handleFormSubmit}
//                 isFormSubmitted={isFormSubmitted}
//                 />
//         </main>
//     );
// };

// export default Main;
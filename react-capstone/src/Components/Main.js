// import React, { useState, useEffect, useReducer } from 'react';
// import BookingForm from './BookingForm';
// import {fetchAPI, submitAPI} from ''


// const Main = ()=>{
//   const [availableTimes, dispatchOnDateChange] = useReducer(
//     updateTimes, [], initializeTimes
// );

// //API"s not defined. 
//     const fetchAPI = () =>{
//       fetch(availableTimes)
//       .then(response => response.json())
//       .then(date => dispatchOnDateChange(date))
//     };

//     useEffect(() => {
//       fetchAPI()
//     }, []);


//     const updateTimes = (availableTimes, date) =>{
//       const response = fetchAPI(new Date(date))
//       return response.length !== 0 ? response : availableTimes
//     };

//     const fetchData = () =>{
      
//     }

//     const initializeTimes = initializeAvailableTimes =>{
//       const fetchData = 
//       [...initializeAvailableTimes, ...fetchAPI(new Date())]
//     };

//     const submitData = formData =>{
//       const response = submitAPI(formData);

//     }

//     // useEffect(() => {
//     //   if (date) {
//     //     const fetchAvailableTimes = async () => {
//     //       await new Promise((resolve) => setTimeout(resolve, 500));

//     //       const newTimes = [
//     //         '17:00',
//     //         '18:00',
//     //         '19:00',
//     //         '20:00',
//     //         '21:00',
//     //         '22:00',
//     //       ].sort(() => Math.random() - 0.5);

//     //       setAvailableTimes(newTimes);
//     //     };

//     //     fetchAvailableTimes();
//     //   }
//     // }, [date]);

//     return(
//         <main>Main
//             <BookingForm
//                 availableTimes={availableTimes}
//                 dispatchOnDateChange={dispatchOnDateChange}
//                 />
//         </main>
//     );
// };

// export default Main;
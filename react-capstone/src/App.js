import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import BookingForm from './Components/BookingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <BookingForm/>
    </div>
  );
}

export default App;

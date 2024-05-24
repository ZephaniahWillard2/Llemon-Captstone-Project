import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import BookingForm from './Components/BookingForm';

// import './App.css';




function App() {
  return (
  
    <div>

     <Header/>
     <Hero/>
     <Main/>
     <Footer/>

    </div>
  
  );
}

export default App;

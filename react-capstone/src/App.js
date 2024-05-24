import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Header from './Components/HeaderFolder/Header';
import Hero from './Components/HeroFolder/Hero';
import Footer from './Components/FooterFolder/Footer';
import Main from './Components/Main';
import BookingForm from './Components/BookingForm/BookingForm';
import FoodCard from './Components/FoodItems/FoodCard';
import Specials from './Components/SpecialsFolder/Specials';
import Reserve from './Components/ReserveTable/Reserve';

// import './App.css';




function App() {
  return (
  
    <div>

     <Header/>
     <Hero/>
     <Specials/>
     <Reserve/>
     <Footer/>

    </div>
  
  );
}

export default App;

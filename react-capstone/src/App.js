import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import BookingForm from './Components/BookingForm';

import './App.css';



function App() {
  return (

    <div>
      <BookingForm/>
      {/* <Header>
        <nav>
          <Link to="/">Footer</Link>
          <Link to="/booking-form">BookingForm</Link>

        </nav>
      </Header>
      <Main>

      </Main>
      <Footer>
        <Routes>
          <Route path='/' element={<Footer/>} ></Route>
          <Route path="/booking-form" element={<BookingForm/>} ></Route>

        </Routes>

      </Footer> */}

    </div>
  );
}

export default App;

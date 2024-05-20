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

    <>
      <Header>
        <nav>
          <Link to="/">HomePage</Link>
        </nav>
      </Header>
      <Main>

      </Main>
      <Footer>
        <Routes>
          <Route path='/' element={<HomePage/>} ></Route>
        </Routes>

      </Footer>
    </>



  );
}

export default App;

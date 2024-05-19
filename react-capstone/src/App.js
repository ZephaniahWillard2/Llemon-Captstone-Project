import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Reservation from './Components/Reservation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Reservation/>
    </div>
  );
}

export default App;

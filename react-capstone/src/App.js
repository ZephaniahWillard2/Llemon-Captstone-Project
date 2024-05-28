import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/HeaderFolder/Header';
import Footer from './Components/FooterFolder/Footer'
import Main from './Components/Main';
import HomePage from './Components/HomePage';


// import './App.css';




function App() {
  return (
  
    <div>
      <Router>
       <Header/>
        <Routes>
          <Route exact path='/home' element={<HomePage/>}/>
          <Route path='/reserve' element={<Main/>}/>
          <Route path='/reserve a table' element={<Main/>}/>
        </Routes>
      <Footer/>
     </Router>
    
    </div>
  
  );
}

export default App;

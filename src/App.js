import React from 'react';
import { BrowserRouter, Routes, Route ,Link, Navigate } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './index.css';
import  Home from './Home.js';
import  About from './About.js';
import  Contactus from './Contactus.js';



function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/about" element={<About />} />
          <Route exact path="/ecom" element={<Home />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path ="*" element= {<Navigate to="/"replace={true} />} />
          <Route  exact path= "/home" element= {<Home />} />      
        </Routes>
      </BrowserRouter>
   
    </>
    
  );
}

export default App;

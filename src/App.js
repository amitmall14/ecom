import React from 'react';
import { BrowserRouter, Routes, Route ,Link, Navigate } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './index.css';
import  Ecom from './Ecom.js';
import  Home from './Home.js';
import  About from './About.js';
import  Contactus from './Contactus.js';



function App() {
  return(
    <>
      <BrowserRouter>
          <Routes>  
          
            <Route  exact path= "/about" element= {<About />} /> 
            <Route  exact path= "/" element= {<HomePage />} /> 
            {/* <Route path="*" element={<NoPage />} /> 

            load Error page


            */

          }

        {/*Redirect to the another Page*/}
             <Route exact path ="*" element= {<Navigate to="/"replace={true} />} />

             <Route  exact path= "/home" element= {<HomePage />} />      
          </Routes>
        </BrowserRouter>
   
    </>
    
  );
}

export default App;

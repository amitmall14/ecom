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
          <Route  exact path= "/bootstrap" element= {<Bootstrap />} /> 
          <Route  exact path= "/matarialui" element= {<Matarialui />} /> 
         
            
            <Route  exact path= "/www" element= {<Routdd />} /> 
             <Route  exact path= "/pnr" element= {<Pnr />} />   
            <Route  exact path= "/login" element= {<Login name="amit" color="green"/>} /> 
             <Route  exact path= "/signup" element= {<Login />} /> 
            <Route  exact path= "/time" element= {<Timee />} />   
            <Route  exact path= "/todo" element= {<Todo />} />  
            <Route  exact path= "/fav" element= {<Fav />} />  
            <Route  exact path= "/todo" element= {<Todo />} /> 
            <Route  exact path= "/todoo" element= {<Todoo />} /> 
            <Route  exact path= "/dressinfo" element= {<Dressinfo />} /> 
            <Route  exact path= "/fib" element= {<Fib />} /> 
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

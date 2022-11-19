import React from 'react';
import  Header from './Header.js';
import  Footer from './Footer.js';
import  Hero from './Hero.js';

const About=()=>{


const data ={
	title :"This is My About Page",
	description: "About Page Description"



}




return(

	<>
	<Header />
	<Hero myData= {data}/>
	<Footer />	

</>


	)




}
export default About;
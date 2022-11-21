import React from 'react';
import  Header from './Header.js';
import  Footer from './Footer.js';
import  Hero from './Hero.js';


const Contactus=() =>{
	const data ={
	title :" Contact-us",
	description: "Email: amitmalltech@gmail.com",
	mobile:"Mob-8178715553",
	adress: " Address-Dinesh Vihar Baghpat Road Meerut",

	



}






return(
	<>
	
	<Header />
	<Hero myData= {data}/>
	

	 <div className= "container"> 
	 <div className= "main"> 
	 <form action= "https://formspree.io/f/maykkqwp" method="Post">
	 <input type="text" placeholder="username" name="username" required autoComplete="off"/>
	 <input type ="email" name ="Email" placeholder="Email" required autoComplete="off"/>
	 <textarea name="message" placeholder="Type your  message" cols="30" rows="10" required autoComplete="off"></textarea>

	 <input type="submit" value="send"/>



	 </form>



	 </div>

	 </div>


	<Footer />	

	</>




	)
}

export default Contactus;

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
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.4713901284035!2d77.66651361471556!3d28.973399382284565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c643a44d1aa97%3A0xef0083c0bfbfc6ec!2sDamru%20Wala%20Mandir!5e0!3m2!1sen!2sin!4v1668836648611!5m2!1sen!2sin" 
	width="100%" 
	height="200" 
	style={{border:0}}
	 allowFullScreen="" 
	 loading="lazy" 
	 referrerPolicy="no-referrer-when-downgrade">
	 </iframe>

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

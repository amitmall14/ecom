import React from 'react';
import  Header from './Header.js';
import  Footer from './Footer.js';
import  Hero from './Hero.js';

const Home =()=>{

	const data ={
	title :"This is My Home Page",
	description: "Home Page Description",

		image:"https://img.freepik.com/premium-vector/new-laptop-sale-promotion-social-facebook-cover-banner_252779-424.jpg?w=2000",
	price:"vklv"




}





return(


<>
<Header/>
<Hero myData={data} />

<Footer/>

</>

	)
}
export default Home;
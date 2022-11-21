import React from 'react';
import  Header from './Header.js';
import  Footer from './Footer.js';
import  Hero from './Hero.js';

const Home =()=>{

	const data ={
	title :"This is My Home Page",
	description: "Home Page Description",
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
import React from 'react';

const Hero =(props)=>{
	console.log(props);
	const {title,description,mobile,adress,image}= props.myData;
	console.log(title);






return(
	<>
	{image ? 	<img src={image} className="banner"/> : ""}

	
	<div className="flex-class">
	<p>
	<h1>{title}
		</h1>
	
	
	<p>{description}</p>
	<p>{mobile}</p>
	<p>{adress}</p>

	


	</p>

	<div className= "moble">

	<a href=""> <img src ="" /></a>
	</div>
	</div>
</>


	)
}
export default Hero;
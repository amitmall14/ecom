import React,{useState} from 'react';
import {NavLink	} from "react-router-dom";
import { FaBeer} from 'react-icons/fa';
import {HiMenu} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';




 const Header =()=>{

 	const [currentvalue ,updatevalue]= useState(false);
 	


 	
const menu=()=>{
	console.log("hi");
	updatevalue(true)

	
}
const hidemenu=()=>{
	console.log("hi");
	updatevalue(false)

	
}


return(

<>
<header>
<div className="header-main">
<div className="logo"><img src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"/></div>

<nav className={ currentvalue ? "shownav":"hidenav"}>

<ul>
<li><NavLink to ="/">Home</NavLink></li>
<li><NavLink to="/about">About Us</NavLink></li>
<li><NavLink>Services</NavLink></li>
<li><NavLink to="/contactus">Contactus</NavLink></li>
</ul>

</nav>
<div className="menu-btn">
<HiMenu onClick={menu} className={ currentvalue ? "hidenav":"shownav"}/>
<AiOutlineClose onClick={hidemenu} className={ currentvalue ? "shownav":"hidenav"}/>
</div>
</div>
</header>
</>



	)
 }
 export default Header;
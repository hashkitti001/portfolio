import React from 'react'
import "../styles/header.css"
import Cta from './cta'
import Socials from './Socials'
import dp from "/src/assets/dp2.png"
const Header = () => {
  return (
    <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Iwegbu Jedidiah</h1>
        <h5 className="text-light">
            Software Developer
        </h5> 
         <Cta/>
         <Socials/>
         <div className="me animate__animated animated animate__bounceInUp">
            <img className="dp" src={dp} alt="Profile pix" />
         </div>
         
    </div>
  )
} 

export default Header;

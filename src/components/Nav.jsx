import React from 'react'
import '../styles/nav.css'
import {BsBriefcaseFill} from 'react-icons/bs'
import {AiFillContacts} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
const Nav = () => {
  return (
    <nav>
      <a href="#"><AiFillHome/></a>
      <a href="#about"><AiFillContacts/></a>
      <a href="#experience"><BsFillBookFill/></a>
      <a href="#projects"><BsBriefcaseFill/></a>
      <a href="#contact"><AiFillMessage/></a>
    </nav>
  )
}

export default Nav;
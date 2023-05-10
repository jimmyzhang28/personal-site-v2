import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiBook, BiMessageDetail } from 'react-icons/bi'
import { useState } from 'react'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav
import React from 'react'
import CV from '../../assets/resume.pdf'
import pfp from '../../assets/me3.jpg'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub, FaInstagramSquare } from 'react-icons/fa'
import './header.css'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5 className="header__intro">Hey there! I'm</h5>
        <h1>Jimmy Zhang</h1>
        <h5 className="text-light header__desc">
          Rising senior studying computer science 
          at Carnegie Mellon University. Check out my resume!
        </h5>

        <div className='header__resume'>
          <a href={CV} target="_blank" rel="noreferrer" className='btn btn-primary'>Resume!</a>
        </div>

        <div className="header__socials">
          <a href="https://www.linkedin.com/in/jimmyzhang28/" target="_blank" rel="noreferrer">
            <BsLinkedin size={30}/>
          </a>
          <a href="https://github.com/jimmyzhang28" target="_blank" rel="noreferrer">
            <FaGithub size={30}/>
          </a>
          <a href="https://www.instagram.com/jzhang7528/" target="_blank" rel="noreferrer">
            <FaInstagramSquare size={30}/>
          </a>
        </div>

        <img src={pfp} alt="" className="me"/>

        <a href={`mailto:jimmyzha@andrew.cmu.edu`} className='header__email'>jimmyzha@andrew.cmu.edu</a>
        
      </div>
    </header>
  )
}

export default Header
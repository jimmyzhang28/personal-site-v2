import React from 'react'
import ABOUTPIC from '../../assets/me2.jpg'
import './about.css'
import { experiences } from '../../assets/info';
import { BiBasketball } from 'react-icons/bi'
import { FaChessKnight, FaSpotify } from 'react-icons/fa'
import { RiNetflixFill } from 'react-icons/ri'

const About = () => {

  let classes = experiences.classes;

  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABOUTPIC} alt="About Me"/>
          </div>
        </div>

        <div className="about__content">
          <p className='about__header'>
            Hi, I'm Jimmy! I'm a senior at Carnegie Mellon University 
            majoring in computer science with minors in machine learning, systems, 
            and business administration.
            Here are some cool classes I've taken at CMU!
          </p>
          <ul className="about__classes">
            {classes.length && classes.map((currClass, i) => {
              return (
                <li key={i}>{currClass}</li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="container about__container-activities">
        <div className="about__content">
          <p className='about__header'>
            I've also been a Teaching Assistant (TA) for 
            15-259 (S24, S23), 15-210 (F23, F22), 15-150 (S22) and 15-151 (F21). I am actively
          </p>
          <ul className="about__ta-list">
            <li>leading recitations for 20+ students</li>
            <li>holding weekly office hours to offer extra help</li>
            <li>grading homeworks and exams for 200+ students</li>
            <li>cultivating a rigorous but enjoyable learning experience!</li>
          </ul>
        </div>

        <div className="about__content">
          <p className='about__header'>
            And in my free time, I'd love to hang out and enjoy some of my favorite activities! 
            How about a game of chess?
          </p>
          <div className="about__interests">
            <a href="https://www.nba.com/rockets/" aria-label="basketball" target="_blank" rel="noreferrer" className="about__interests-icon">
              <BiBasketball size={50}/>
            </a>
            <a href="https://www.chess.com/member/jchess7528" aria-label="chess" target="_blank" rel="noreferrer" className="about__interests-icon">
              <FaChessKnight size={50}/>
            </a>
            <a href="https://www.netflix.com/browse?jbv=70264888" aria-label="Netflix" target="_blank" rel="noreferrer" className="about__interests-icon">
              <RiNetflixFill size={50}/>
            </a>
            <a href="https://open.spotify.com/playlist/3yWma7g2hN2WeB6QedOFSm?si=f3813628caf548fc" aria-label="Spotify" target="_blank" rel="noreferrer" className="about__interests-icon">
              <FaSpotify size={50}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import './contact.css'
import CV from '../../assets/resume.pdf'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>What Now?</h5>
      <h1>Let's Connect!</h1>
      <p className="contact__description">
        I'm always open to new opportunities in software, AI, and anything practical! Feel free to reach out. My inbox is always open!
      </p>
      <div className='contact__connect'>
        <a href={CV} download className='btn btn-primary'>Resume!</a>
        <a href={`mailto:jimmyzha@andrew.cmu.edu`} className='btn btn-primary'>Let's Connect!</a>
      </div>
    </section>
  )
}

export default Contact
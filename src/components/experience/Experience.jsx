import React, { useState } from 'react'
import { experiences } from '../../assets/info'
import './experience.css'

const Experience = () => {

  let data = experiences.experienceInfo;
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <section id='experience'>
      <h5>Where I've Worked</h5>
      <h1>My Experience</h1>

      <div className="container experience__container">
        <div className="experience__list">
          {data.length && data.map((job, i) => 
            <button 
              className={activeTabId === i ? 'experience__button active__button' : 'experience__button'}
              key={i}
              onClick={() => setActiveTabId(i)}
            >{job.company}</button>
          )}
        </div>

        <div className="experience__panels">
          {data.length && data.map((job, i) => 
            <div className="experience__panel" key={i} hidden={activeTabId !== i}>
              <h3>{job.role} @ {job.company}</h3>
              <h4>{job.range}</h4>
              <ul className='experience__bullets'>
                {job.bulletPoints.length && job.bulletPoints.map((bullet, j) => 
                  <li key={j}>{bullet}</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience
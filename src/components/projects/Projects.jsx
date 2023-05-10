import React from 'react'
import { experiences } from '../../assets/info'
import Project from './Project'
import './projects.css'

const Projects = () => {

  let data = experiences.projectInfo;

  return (
    <section id='projects'>
      <h5>What I've Built</h5>
      <h1>My Projects</h1>
      <div className="projects__list">
        {data.length && data.map((project, i) => (
          <Project key={i} project={project}/>
        ))}
      </div>
    </section>
  )
}

export default Projects
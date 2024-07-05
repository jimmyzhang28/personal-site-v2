import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsSend } from 'react-icons/bs'

const Project = ({project}) => {
  return (
    <div className='project__container'>
      <div className="project__content">
        <div className="project__box">
          <div className="project__title">
            {project.title}
            </div>
          <div className="project__desc">
            {project.description}
          </div>
          <div className="project__tech">
            {project.tech.length && project.tech.map((tech, i) => {
              return (
                <span key={i} className="project__tech-label">{tech}</span>
              );
            })}
          </div>
        </div>
        <div className="project__link">
          {project.githubLink && (
            <a href={project.githubLink} aria-label="Project GitHub" target="_blank" rel="noreferrer" className="project__link-logo">
              <FaGithub size={25}/>
            </a>
          )}
          {project.externalLink && (
            <a href={project.externalLink} aria-label="Project Link" target="_blank" rel="noreferrer"className="project__link-logo">
              <BsSend size={25}/>
            </a>
          )}
        </div>
      </div>
      <div className="project__image">
        <img src={project.picture} alt="" className="project__img"/>
      </div>
    </div>
  );
}

export default Project
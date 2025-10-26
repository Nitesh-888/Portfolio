import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'StayEase (Airbnb Clone)',
      description: 'A full-featured accommodation booking platform built with modern web technologies, featuring property listings, booking management, and user authentication.',
      link: 'https://stayease.niteshgupta.me/',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js']
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Live Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

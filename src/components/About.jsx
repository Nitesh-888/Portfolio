import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm a passionate Full Stack Developer with expertise in modern web technologies 
            and a strong foundation in software development principles.
          </p>
          <div className="about-details">
            <div className="detail-item">
              <h3 className="detail-title">🎓 Education</h3>
              <p>Bachelor of Computer Applications</p>
              <p className="detail-secondary">Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming</p>
            </div>
            <div className="detail-item">
              <h3 className="detail-title">💼 Experience</h3>
              <p>Full Stack Developer</p>
              <p className="detail-secondary">
                Specialized in building scalable web applications using modern frameworks and technologies. 
                Experienced in both frontend (React.js, Material-UI, Bootstrap, Tailwind CSS) and backend 
                (.NET Core, Node.js, Express.js, MongoDB, SQL) development.
              </p>
            </div>
            <div className="detail-item">
              <h3 className="detail-title">🚀 Key Expertise</h3>
              <ul className="expertise-list">
                <li>Building responsive and interactive user interfaces with React.js</li>
                <li>Developing RESTful APIs using ASP.NET Web API and Node.js</li>
                <li>Database design and management with MongoDB and SQL</li>
                <li>Version control and collaboration using Git and GitHub</li>
                <li>Containerization and deployment with Docker</li>
              </ul>
            </div>
            <div className="detail-item">
              <h3 className="detail-title">🎯 Professional Goals</h3>
              <p className="detail-secondary">
                Committed to continuous learning and staying updated with the latest technologies. 
                Passionate about creating efficient, maintainable, and user-friendly applications 
                that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

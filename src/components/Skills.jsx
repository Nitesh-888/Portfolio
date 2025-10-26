import React from 'react'
import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Material-UI', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'MongoDB', 'Express.js', 'SQL', 'Mongoose']
    },
    {
      title: '.NET',
      skills: ['C#', 'ASP.NET Web API', 'ASP.NET MVC', 'Entity Framework', '.NET Core', 'LINQ']
    },
    {
      title: 'Programming',
      skills: ['Java', 'Data Structures', 'OOPs']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Git Bash', 'Docker', 'MVC', 'Linux']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

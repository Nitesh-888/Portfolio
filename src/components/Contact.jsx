import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-text">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <a 
          href="mailto:niteshgupta98994@gmail.com" 
          className="contact-button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Email Me
        </a>
      </div>
    </section>
  )
}

export default Contact

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 30px auto', lineHeight: '1.6' }}>
        I'm currently looking for new opportunities and my inbox is always open. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <div style={{ marginBottom: '40px', color: '#94a3b8', lineHeight: '1.8' }}>
        <p>📍 Burnaby, BC</p>
        <p>📧 javiale0310@gmail.com</p>
        <p>🐙 <a href="https://github.com/Javier0311" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>github.com/Javier0311</a></p>
      </div>

      <a href="mailto:javiale0310@gmail.com" className="btn-primary" style={{ textDecoration: 'none' }}>
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
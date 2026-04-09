import React from 'react';

const Hero = () => {
  return (
    <header id="hero" className="hero">
      <p className="greeting">Hi, my name is</p>
      <h2 className="name">Javier.</h2>
      <h3 className="subtitle">I build responsive and user-friendly web applications.</h3>
      <p className="description">
        I'm a highly adaptable Web Developer based in Burnaby, BC. I specialize in crafting 
        powerful frontends using React and Vue, and I'm currently expanding my full-stack 
        capabilities with Python and Django.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>Check out my projects</a>
        <a href="/assets/Javier_Nieto_Resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-block' }}>View Resume</a>
      </div>
    </header>
  );
};

export default Hero;
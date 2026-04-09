import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        
        {/* Proyecto 1: Simulador */}
        <div className="project-card">
          {/* Reemplaza el src con la ruta de tu imagen cuando la tengas */}
          <img src="/assets/merchant-sim.jpg" alt="Screenshot of the Merchant Sim Game interface" style={{ width: '100%', borderRadius: '5px', marginBottom: '15px', border: '1px solid #334155' }} />
          <h3>Merchant Simulator Game</h3>
          <p>
            An interactive resource management and trading simulation game. 
            <strong> Problem-Solving:</strong> Engineered complex state management and a dynamic economy loop, 
            ensuring balanced resource generation and engaging gameplay mechanics through robust object-oriented programming.
          </p>
          <div className="project-tech" style={{ marginBottom: '15px' }}>Logic · State Management · OOP</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://github.com/Javier0311/merchant-sim-game" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '8px 15px', fontSize: '0.9rem' }}>View Code</a>
          </div>
        </div>

        {/* Proyecto 2: SQL/PHP */}
        <div className="project-card">
          <img src="/assets/sql-php.jpg" alt="Screenshot of the Database Management System" style={{ width: '100%', borderRadius: '5px', marginBottom: '15px', border: '1px solid #334155' }} />
          <h3>Full-Stack Database System</h3>
          <p>
            A robust web application built to manage and interact with relational data. 
            <strong> Problem-Solving:</strong> Designed a normalized SQL database architecture and implemented secure 
            CRUD (Create, Read, Update, Delete) operations using a PHP backend to efficiently handle and serve dynamic data.
          </p>
          <div className="project-tech" style={{ marginBottom: '15px' }}>PHP · MySQL · HTML/CSS</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://github.com/santiagosu1/SQL-PHP-FINAL-PROJECT" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '8px 15px', fontSize: '0.9rem' }}>View Code</a>
          </div>
        </div>

        {/* Proyecto 3: Portafolio */}
        <div className="project-card">
          <img src="/assets/portfolio.jpg" alt="Screenshot of this Web Developer Portfolio" style={{ width: '100%', borderRadius: '5px', marginBottom: '15px', border: '1px solid #334155' }} />
          <h3>Professional Web Portfolio</h3>
          <p>
            A fully responsive, accessible, and highly optimized personal developer portfolio. 
            <strong> Problem-Solving:</strong> Built from scratch utilizing a mobile-first CSS architecture and React component 
            modularization to ensure cross-device compatibility, fast loading times, and a seamless user experience.
          </p>
          <div className="project-tech" style={{ marginBottom: '15px' }}>React.js · CSS3 · Mobile-First Design</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://github.com/Javier0311/portfolio-javier" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '8px 15px', fontSize: '0.9rem' }}>View Code</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid" style={{ marginBottom: '60px' }}>
        
        {/* 1. Frontend */}
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>React.js & Vue.js</li>
            <li>JavaScript (ES6+)</li>
            <li>Tailwind CSS & Bootstrap</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        
        {/* 2. Backend & Data */}
        <div className="skill-category">
          <h3>Backend & Data</h3>
          <ul>
            <li>Python & Django</li>
            <li>PHP & MySQL</li>
            <li>RESTful APIs</li>
            <li>Database Architecture</li>
          </ul>
        </div>
        
        {/* 3. Mechatronics & AI (NUEVO) */}
        <div className="skill-category">
          <h3>Engineering & AI</h3>
          <ul>
            <li>Mechatronics Systems</li>
            <li>Machine Learning (Basics)</li>
            <li>Neural Networks Concepts</li>
            <li>Hardware/Software Integration</li>
          </ul>
        </div>

        {/* 4. Tools & Workflow */}
        <div className="skill-category">
          <h3>Tools & Workflow</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Complex Problem Solving</li>
            <li>Time Management</li>
            <li>Logical Reasoning</li>
          </ul>
        </div>
      </div>

      <h2 className="section-title">Education & Coursework</h2>
      <div className="education-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div className="education-card" style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '10px', borderLeft: '4px solid #38bdf8' }}>
          <h3 style={{ color: '#f8fafc', marginBottom: '5px' }}>Diploma in Web Development (Co-op)</h3>
          <p style={{ color: '#38bdf8', marginBottom: '15px', fontWeight: 'bold' }}>Tamwood International College, Vancouver | Expected Nov 2026</p>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
            <strong>Relevant Coursework:</strong> Powerful Frontend Web Development (React/Vue), 
            Content Management (PHP/MySQL), and Empowering the Web with Python & Django.
          </p>
        </div>
        
        <div className="education-card" style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '10px', borderLeft: '4px solid #38bdf8' }}>
          <h3 style={{ color: '#f8fafc', marginBottom: '5px' }}>Bachelor of Science in Mechatronics Engineering</h3>
          <p style={{ color: '#38bdf8', marginBottom: '15px', fontWeight: 'bold' }}>Universidad de Pamplona, Colombia | Expected Dec 2027</p>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Developing a robust foundation in logical reasoning, advanced mathematics, systems automation, and integrating hardware with software solutions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
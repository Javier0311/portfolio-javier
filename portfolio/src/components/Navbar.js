import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Javier.</h1>
      <ul className="nav-links">
        <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
        <li><a href="#skills" style={{ color: 'inherit', textDecoration: 'none' }}>Skills</a></li>
        <li><a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a></li>
        <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
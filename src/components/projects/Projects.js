import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-description">
        Below are some of the projects I’ve worked on. Feel free to check out the live demos or explore the code on GitHub.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <h2>Nodo</h2>
          <p>A platform offering innovative solutions for businesses. Explore it at:</p>
          <a href="https://www.nodo.am" target="_blank" rel="noopener noreferrer">
            www.nodo.am
          </a>
        </div>

        <div className="project-card">
          <h2>RentX</h2>
          <p>A solution for rental services, designed to improve efficiency. Check it out at:</p>
          <a href="https://www.rentx.inc" target="_blank" rel="noopener noreferrer">
            www.rentx.inc
          </a>
        </div>

        <div className="project-card">
          <h2>Elevators (GitHub)</h2>
          <p>Code for the Elevators simulation project:</p>
          <a href="https://github.com/VarGhimoyan2004/elevators" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h2>Game (GitHub)</h2>
          <p>A game project built using JavaScript. Check the source code:</p>
          <a href="https://github.com/VarGhimoyan2004/game" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h2>Gas Station (GitHub)</h2>
          <p>Source code for the Gas Station project:</p>
          <a href="https://github.com/VarGhimoyan2004/Gas-Station" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

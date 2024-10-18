import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';
import ContactForm from './components/contactForm/ContactForm';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <header>
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
          <nav>
            <Link to="/">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

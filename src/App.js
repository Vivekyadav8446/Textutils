import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.className = newMode;
    document.documentElement.setAttribute('data-bs-theme', newMode);
    localStorage.setItem('theme', newMode);
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setMode(savedTheme);
    document.body.className = savedTheme;
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
  }, []);

  return (
    <BrowserRouter>
      <div className={`d-flex flex-column min-vh-100 bg-${mode}`}>
        {/* Responsive Navbar */}
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">TextUtils</Link>
            
            {/* Combined Toggle Buttons */}
            <div className="d-flex align-items-center">
              {/* Dark/Light Mode Toggle */}
              <button 
                className="btn btn-link p-0 border-0 me-2"
                onClick={toggleMode}
                aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
              >
                {mode === 'dark' ? (
                  <FaSun className="text-warning fs-5" />
                ) : (
                  <FaMoon className={`fs-5 ${mode === 'dark' ? 'text-light' : 'text-dark'}`} />
                )}
              </button>
              
              {/* Hamburger Menu Button */}
              <button 
                className="navbar-toggler border-0" 
                type="button"
                onClick={toggleNavbar}
                aria-label="Toggle navigation"
              >
                <FaBars className={mode === 'dark' ? 'text-light' : 'text-dark'} />
              </button>
            </div>
            
            {/* Collapsible Menu */}
            <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}>
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={() => setNavbarOpen(false)}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={() => setNavbarOpen(false)}>About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className={`flex-grow-1 container my-4 text-${mode === 'dark' ? 'light' : 'dark'}`}>
          <Routes>
            <Route path="/" element={<TextForm mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className={`bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'} py-3 mt-auto`}>
          <div className="container text-center">
            © {new Date().getFullYear()} TextUtils - All Rights Reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
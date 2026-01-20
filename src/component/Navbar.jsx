import React from 'react';
import '../styles/Navbar.css';

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => setCurrentPage('home')}>
          <h1>ChemEng Prep</h1>
          <p className="subtitle">Interview Preparation</p>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <button 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${currentPage === 'notes' ? 'active' : ''}`}
              onClick={() => setCurrentPage('notes')}
            >
              Notes
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
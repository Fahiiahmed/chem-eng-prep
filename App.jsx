import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notes from './components/Notes';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === 'notes' && <Notes />}
    </div>
  );
}

export default App;
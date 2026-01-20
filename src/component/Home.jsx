import React from 'react';
import '../styles/Home.css';

function Home({ setCurrentPage }) {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ChemEng Prep</h1>
          <p>Master Chemical Engineering Equipment for Your Interviews</p>
          <button 
            className="cta-button"
            onClick={() => setCurrentPage('notes')}
          >
            Start Learning →
          </button>
        </div>
      </section>

      <section className="features">
        <h2>What You'll Learn</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>9 Core Equipment Types</h3>
            <p>Master cooling towers, pumps, distillation, heat exchangers, flowmeters, mixing, valves, size reduction, and steam ejectors.</p>
          </div>
          <div className="feature-card">
            <h3>Detailed Concepts</h3>
            <p>Comprehensive notes extracted from PDFs with exact OCR text - ready for your interviews.</p>
          </div>
          <div className="feature-card">
            <h3>Search & Filter</h3>
            <p>Quickly find specific topics by searching equipment names and keywords.</p>
          </div>
          <div className="feature-card">
            <h3>Interview Ready</h3>
            <p>Structured content perfect for freshers preparing for HMEL, JSW, Forbes Marshall, and similar roles.</p>
          </div>
        </div>
      </section>

      <section className="equipment-preview">
        <h2>Equipment Covered</h2>
        <ul className="equipment-list">
          <li>✓ Cooling Towers (Evaporative cooling, fouling, scaling)</li>
          <li>✓ Pumps (Positive displacement, centrifugal, NPSH, cavitation)</li>
          <li>✓ Distillation Equipments (Tray types, packed columns, failures)</li>
          <li>✓ Heat Exchangers (Plate, shell-tube, double-pipe, spiral)</li>
          <li>✓ Flowmeters (Venturi, orifice, rotameter, pitot tube)</li>
          <li>✓ Mixing Equipments (Impeller types, axial, radial, mixed flow)</li>
          <li>✓ Valves (Gate, globe, ball, check, butterfly, diaphragm)</li>
          <li>✓ Size Reduction (Crushers, grinders, comminution)</li>
          <li>✓ Steam Jet Ejector (Vacuum pump, supersonic flow)</li>
        </ul>
      </section>

      <section className="roadmap">
        <h2>Learning Roadmap</h2>
        <div className="roadmap-timeline">
          <div className="timeline-item">
            <div className="timeline-marker">Week 1</div>
            <p>Static website with all 9 equipments, full content, and search functionality</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">Week 2</div>
            <p>MCQ/Quiz system for practice and assessment</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">Future</div>
            <p>User dashboards, progress tracking, and advanced features</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>Built by a ChemE fresher, for ChemE freshers • GitHub: chem-eng-prep</p>
      </footer>
    </div>
  );
}

export default Home;